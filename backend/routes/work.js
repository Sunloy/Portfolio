const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Create unique filename: fieldname-timestamp.extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Error: Images Only!'));
    }
});

// GET all work projects
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM work_projects ORDER BY display_order ASC, id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST new work project
router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const { category } = req.body;
        let image_url = req.body.image_url; // Fallback if no file uploaded

        if (req.file) {
            // Construct URL path (relative to server root)
            image_url = `/uploads/${req.file.filename}`;
        }

        if (!image_url) {
            return res.status(400).json({ error: 'Image is required' });
        }
        const result = await db.query(
            'INSERT INTO work_projects (category, image_url) VALUES ($1, $2) RETURNING *',
            [category, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update work project
router.put('/:id', authenticateToken, upload.single('image'), async (req, res) => {
    const { id } = req.params;
    try {
        const { category } = req.body;
        let image_url = req.body.image_url;

        if (req.file) {
            image_url = `/uploads/${req.file.filename}`;
        }
        const result = await db.query(
            'UPDATE work_projects SET category = $1, image_url = $2 WHERE id = $3 RETURNING *',
            [category, image_url, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE work project
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM work_projects WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

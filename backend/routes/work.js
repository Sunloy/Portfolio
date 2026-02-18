const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

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
router.post('/', authenticateToken, async (req, res) => {
    const { category, image_url } = req.body;
    try {
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
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { category, image_url } = req.body;
    try {
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

const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

// GET all education
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM education ORDER BY display_order ASC, id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST new education
router.post('/', authenticateToken, async (req, res) => {
    const { title, paragraph1, paragraph2 } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO education (title, paragraph1, paragraph2) VALUES ($1, $2, $3) RETURNING *',
            [title, paragraph1, paragraph2]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update education
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { title, paragraph1, paragraph2 } = req.body;
    try {
        const result = await db.query(
            'UPDATE education SET title = $1, paragraph1 = $2, paragraph2 = $3 WHERE id = $4 RETURNING *',
            [title, paragraph1, paragraph2, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Education not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE education
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM education WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Education not found' });
        }
        res.json({ message: 'Education deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

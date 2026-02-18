const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

// GET all skills
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM skills ORDER BY display_order ASC, id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST new skill
router.post('/', authenticateToken, async (req, res) => {
    const { name, level_percent, color } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO skills (name, level_percent, color) VALUES ($1, $2, $3) RETURNING *',
            [name, level_percent, color || 'bg-blue-500']
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update skill
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { name, level_percent, color } = req.body;
    try {
        const result = await db.query(
            'UPDATE skills SET name = $1, level_percent = $2, color = $3 WHERE id = $4 RETURNING *',
            [name, level_percent, color, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE skill
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM skills WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json({ message: 'Skill deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

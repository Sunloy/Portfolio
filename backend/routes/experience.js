const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

// GET all experience (Public)
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM experience ORDER BY display_order ASC, id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST new experience
router.post('/', authenticateToken, async (req, res) => {
    const { role, company, period, description } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO experience (role, company, period, description) VALUES ($1, $2, $3, $4) RETURNING *',
            [role, company, period, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update experience
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { role, company, period, description } = req.body;
    try {
        const result = await db.query(
            'UPDATE experience SET role = $1, company = $2, period = $3, description = $4 WHERE id = $5 RETURNING *',
            [role, company, period, description, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE experience
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM experience WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        res.json({ message: 'Experience deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

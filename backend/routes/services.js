const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

// GET all services
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM services ORDER BY display_order ASC, id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST new service
router.post('/', authenticateToken, async (req, res) => {
    const { title, description, icon_name, border_color } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO services (title, description, icon_name, border_color) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, icon_name, border_color || 'border-blue-500']
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT update service
router.put('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { title, description, icon_name, border_color } = req.body;
    try {
        const result = await db.query(
            'UPDATE services SET title = $1, description = $2, icon_name = $3, border_color = $4 WHERE id = $5 RETURNING *',
            [title, description, icon_name, border_color, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE service
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json({ message: 'Service deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

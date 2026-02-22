const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Routes
const skillsRoutes = require('./routes/skills');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const servicesRoutes = require('./routes/services');
const workRoutes = require('./routes/work');
const authRoutes = require('./routes/auth');

app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/work', workRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

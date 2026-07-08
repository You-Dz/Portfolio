const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const projectsRoute = require('./routes/projects');
const skillsRoute = require('./routes/skills');
const userRoute = require('./routes/user')

const app = express();

// Connexion à la base
connectDB();

// CORS
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:5173'  // pour le dev local
];

app.use((req, res, next) => {
    const origin = req.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});



app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/projects', projectsRoute);
app.use('/api/skills', skillsRoute);
app.use('/api/auth', userRoute);
module.exports = app;
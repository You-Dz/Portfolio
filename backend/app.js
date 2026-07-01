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

app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/projects', projectsRoute);
app.use('/api/skills', skillsRoute);
app.use('/api/auth', userRoute);

module.exports = app;
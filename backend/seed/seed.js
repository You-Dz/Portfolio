const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('../models/Project');
const Skill = require('../models/Skill');
const projectsData = require('./projectsData');
const skillsData = require('./skillsData');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('🔌 Connecté à MongoDB');

        // On vide les collections
        await Project.deleteMany({});
        await Skill.deleteMany({});
        console.log('🗑️  Collections vidées');

        // On injecte
        await Project.insertMany(projectsData);
        await Skill.insertMany(skillsData);
        console.log('🌱 Seed terminé avec succès !');

    } catch (error) {
        console.error('❌ Erreur seed :', error);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Connexion fermée');
    }
};

seedDB();
const Project = require('../models/project');

const findProjectById = (id) => {
    return Project.findById(id)
        .then(project => {
            if (!project) {
                const error = new Error('Projet non trouvé');
                error.status = 404;
                throw error;
            }
            return project;
        });
};

const buildImageUrl = (req, filename) =>
    `${req.protocol}://${req.get('host')}/images/${filename}`;



module.exports = { findProjectById, buildImageUrl };


const fs = require('fs');
const Project = require('../models/project');
const { findProjectById } = require('../utils/projectsUtils');

exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then((projects) => res.status(200).json(projects))
        .catch((error) => res.status(500).json({ error }));
};

exports.getOneProject = (req, res, next) => {
    findProjectById(req.params.id)
        .then((project) => res.status(200).json(project))
        .catch((error) => res.status(error.status || 500).json({ message: error.message }));
};

exports.createProject = (req, res, next) => {
    // Quand on envoie du multipart/form-data, les champs JSON
    // (techs, objectives...) arrivent en string -> à parser 
    const projectData = JSON.parse(req.body.project);
    projectData.slug = projectData.title
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // enlève accents
        .replace(/[^a-z0-9]+/g, "-")  // remplace non-alphanum par -
        .replace(/^-+|-+$/g, "");     // trim les tirets

    if (req.body.cover) projectData.cover = req.body.cover;
    if (req.body.images) {
        projectData.images = req.body.images;
    }

    const project = new Project(projectData);
    project.save()
        .then(() => res.status(201).json({ message: 'Projet créé !' }))
        .catch((error) => res.status(400).json({ error }));
};


exports.updateProject = (req, ress, next) => {
    let projectNew;
    if (req.file || req.files) {
        projectNew = { ...JSON.parse(req.body.project) }
        if (req.body.cover) {
            projectNew.cover = req.body.cover;

        }
        if (req.body.images) { projectNew.images = req.body.images }
    } else {
        projectNew = { ...req.body };
    }
    findProjectById(req.params.id)
        .then((project) => {
            return project.updateOne({ _id: req.params.id }, { ...projectNew, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Projet modifié avec succès' }));
        })
        .catch((error) => res.status(error.status || 500).json({ message: error.message }));
};

exports.deleteProject = (req, res, next) => {
    findProjectById(req.params.id)
        .then(project => {
            const filesToDelete = [];

            // sécurité : on ne pousse que si ça existe
            if (project.cover) filesToDelete.push(project.cover);
            if (project.images && project.images.length) {
                project.images.forEach((img) => filesToDelete.push(img));
            }

            return Promise.all(
                filesToDelete.map((file) =>
                    fs.promises.unlink(`images/projects/${file}`).catch(() => null)
                )
            )
                .then(() => project.deleteOne()) // ← instance, pas { _id: ... }
                .then(() => res.status(200).json({ message: 'Projet supprimé avec succès' }))
        })
        .catch((error) => res.status(error.status || 500).json({ message: error.message }))
}
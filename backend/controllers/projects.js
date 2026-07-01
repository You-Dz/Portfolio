const Project = require('../models/project');
const { findProjectById, buildImageUrl } = require('../utils/projectsUtils');

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

    if (req.body.cover) projectData.cover = buildImageUrl(req, req.body.cover);
    if (req.body.images) {
        projectData.images = req.body.images.map((f) => buildImageUrl(req, f));
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
            projectNew.cover = buildImageUrl(req.body.cover);

        }
        if (req.body.images) { projectNew.images = req.body.images.map((f) => buildImageUrl(req, f)); }
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
            const coverFile = project.cover.split('/images/')[1];
            const filesToDelete = [coverFile];
            if (project.images && project.images.length) {
                project.images.forEach((url) =>
                    filesToDelete.push(url.split('/images/')[1]))
            };
            //Promise.all necessaire pour que l'ensemble des promesses de suppression de fichier soit finie avant de supprimer le reste du BDD
            return Promise.all(
                filesToDelete.map((file) => fs.promise.unlink(`images/${file}`))
            )
                .then(() => project.deleteOne({ _id: req.params.id }))
                .then(() => res.status(200).json({ message: 'Projet supprimé avec succès' }))
        })
        .catch((error) => res.status(error.status || 500).json({ message: error.message }))
}
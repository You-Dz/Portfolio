const Skills = require('../models/skill');


exports.getAllSkills = (req, res, next) => {
    Skills.find()
        .then((skills) => res.status(200).json(skills))
        .catch((error) => res.status(500).json({ error }));
};
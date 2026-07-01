const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: String, required: true }, // format "2026-03"
    cover: { type: String, required: true },
    images: { type: [String], default: [] },  // ex screenshot, tableau

    techs: [
        {
            name: { type: String, required: true },
            icon: { type: String, required: true },
        },
    ],

    resume: { type: String, required: true },
    context: { type: String, required: true },

    objectives: { type: [String], default: [] },
    stacks: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    results: { type: [String], default: [] },
    improvements: { type: [String], default: [] },

    links: {
        github: { type: String, default: "" },
        demo: { type: String, default: "" },
    },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 3 },
    preference: { type: Boolean, default: false },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);

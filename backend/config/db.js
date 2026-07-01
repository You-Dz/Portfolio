const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connexion à MongoDB réussie ! 🔌');
    } catch (err) {
        console.error('Connexion à MongoDB échouée !', err);
        process.exit(1); // on arrête le serveur si pas de BDD
    }
};

module.exports = connectDB;
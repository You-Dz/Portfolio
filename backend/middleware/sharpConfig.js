const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Dossier de sortie (adapte le nombre de '..' à ton arborescence !)
const OUTPUT_DIR = path.join(__dirname, '..', 'images');

// Sécurité : crée le dossier s'il n'existe pas (utile au déploiement)
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Fonction utilitaire : traite UN fichier et renvoie son nom .webp
const processImage = async (file) => {
    const name = file.originalname.split(' ').join('_').split('.')[0];
    const filename = `${name}_${Date.now()}.webp`;

    await sharp(file.buffer)
        .resize(1024, 1024, {
            fit: 'inside',            // garde le ratio
            withoutEnlargement: true, // n'agrandit pas les petites images
        })
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, filename));

    return filename;
};

// ── Cas 1 : un seul fichier (utilisé MAINTENANT) ──
exports.optimizeSingle = async (req, res, next) => {
    if (!req.file) return next();
    try {
        req.body.cover = await processImage(req.file);
        next();
    } catch (error) {
        res.status(500).json({ error });
    }
};

// ── Cas 2 : cover + images multiples (pour PLUS TARD) ──
exports.optimizeFields = async (req, res, next) => {
    if (!req.files) return next();
    try {
        if (req.files.cover && req.files.cover[0]) {
            req.body.cover = await processImage(req.files.cover[0]);
        }
        if (req.files.images && req.files.images.length) {
            req.body.images = await Promise.all(
                req.files.images.map((file) => processImage(file))
            );
        }
        next();
    } catch (error) {
        res.status(500).json({ error });
    }
};

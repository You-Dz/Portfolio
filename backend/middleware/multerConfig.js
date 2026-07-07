const multer = require('multer');

// 1) Dictionnaire des formats AUTORISÉS.
//    Clé = type MIME envoyé par le navigateur / Valeur = extension.
//    Sert au filtre pour dire "oui ce format je l'accepte".
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
};

// 2) Mode de stockage : RAM (buffer), PAS le disque.
//    => Sharp s'occupera d'écrire le fichier final.
const storage = multer.memoryStorage();

// 3) Le FILTRE : portier qui contrôle chaque fichier.
//    callback(null, true)  => fichier accepté, il continue sa route
//    callback(erreur, false) => fichier refusé, erreur renvoyée
const fileFilter = (req, file, callback) => {
    if (MIME_TYPES[file.mimetype]) {      // le format est dans ma liste ?
        callback(null, true);             // OUI -> j'accepte
    } else {
        callback(new Error('Format non supporté'), false); // NON -> je refuse
    }
};

// 4) On assemble la "machine" Multer avec nos 3 réglages.
const upload = multer({
    storage,                              // où ranger (RAM)
    fileFilter,                           // qui filtrer
    limits: { fileSize: 1024 * 1024 * 5 } // taille max = 5 Mo
});

// 5) Deux "sorties" prêtes à brancher dans les routes.
module.exports = {
    single: upload.single('cover'),       // 1 fichier, champ "cover" -> req.file
    fields: upload.fields([               // plusieurs champs        -> req.files
        { name: 'cover', maxCount: 1 },
        { name: 'images', maxCount: 10 },
    ]),
};

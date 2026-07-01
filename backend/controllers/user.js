const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');


exports.login = (req, res, next) => {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ message: "Email et mot de passe requis" });
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Association mot de passe/email incorrect' })
            }
            return bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Association mot de passe/email incorrect' })
                    }
                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: '24h' });

                    res.status(200).json({
                        token: token
                    })
                })
        })
        .catch((error) => res.status(500).json({ error }));
}


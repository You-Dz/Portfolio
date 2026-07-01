require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const createAdmin = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const email = process.env.EMAIL_ADMIN;
    const password = process.env.PASSWORD_ADMIN;
    const hash = await bcrypt.hash(password, 10);
    await User.create({ email, password: hash });
    console.log('Admin créé')
    await mongoose.disconnect();
};
createAdmin().catch(console.error);

const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multerConfig');
// const sharpConfig = require('../middleware/sharpConfig');

router.get('/', skillsCtrl.getAllSkills);
module.exports = router;
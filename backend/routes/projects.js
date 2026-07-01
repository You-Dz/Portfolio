const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/projects');
const auth = require('../middleware/auth');
const multer = require('../middleware/multerConfig');
const sharpConfig = require('../middleware/sharpConfig');



router.get('/', projectCtrl.getAllProjects)

router.get('/:id', projectCtrl.getOneProject)

router.post('/', auth, multer.single, sharpConfig.optimizeSingle, projectCtrl.createProject);

router.put('/:id', auth, multer.single, sharpConfig.optimizeSingle, projectCtrl.updateProject)
router.delete('/:id', auth, projectCtrl.deleteProject)





module.exports = router;
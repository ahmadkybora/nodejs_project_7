const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');

router.get('/', UserController.Index);
router.get('/create', UserController.Create);
router.post('/store', UserController.Store);
router.get('/show/:id', UserController.Show);
router.get('/edit/:id', UserController.Edit);
router.patch('/update/:id', UserController.Update);
router.delete('/delete/:id', UserController.Destroy);

module.exports = router;

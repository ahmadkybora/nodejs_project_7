const express = require('express');
const router = express.Router();
const EmployeeController = require('../../app/Controllers/Panel/EmployeeController');

router.get('/', EmployeeController.Index);
router.get('/create', EmployeeController.Create);
router.post('/store', EmployeeController.Store);
router.get('/show/:id', EmployeeController.Show);
router.get('/edit/:id', EmployeeController.Edit);
router.patch('/update/:id', EmployeeController.Update);
router.delete('/delete/:id', EmployeeController.Destroy);

module.exports = router;

var express = require('express');
var router = express();

var taskController = require('../controller/taskController');

/* GET home page. */
router.get('/', taskController.list);
router.get('/addtask', taskController.getTask);
router.get('/removeTask/:id', taskController.removeTask);

router.post('/addtask', taskController.addTask);
router.put('/updateTask/:id', taskController.updateTask);


module.exports = router;

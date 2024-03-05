import express from 'express';
// Dentro de src/routes/taskRoutes.js
import TaskController from '../controllers/taskController.js';



const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

router.post('/', TaskController.createTask);
router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.patch('/:id/complete', TaskController.completeTask);

export default router;


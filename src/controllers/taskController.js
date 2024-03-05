// TaskController.js
import { Database } from '../Database.js';
import { v4 as uuidv4 } from 'uuid';

const db = new Database();

const TaskController = {
  createTask: (req, res) => {
    const { title, description } = req.body;
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date()
    };

    db.insert('tasks', newTask);
    res.status(201).json(newTask);
  },

  getAllTasks: (req, res) => {
    const tasks = db.select('tasks');
    res.status(200).json(tasks);
  },

  updateTask: (req, res) => {
    const { title, description } = req.body;
    const updatedTask = db.update('tasks', req.params.id, { title, description, updated_at: new Date() });

    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).send('Task not found');
    }
  },

  deleteTask: (req, res) => {
    const isDeleted = db.delete('tasks', req.params.id);

    if (isDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Task not found');
    }
  },

  completeTask: (req, res) => {
    const completedTask = db.update('tasks', req.params.id, { completed_at: new Date() });

    if (completedTask) {
      res.status(200).json(completedTask);
    } else {
      res.status(404).send('Task not found');
    }
  }
};

export default TaskController;

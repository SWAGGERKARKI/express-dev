import express from 'express';
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/users.js';

// creating instance of express
const router = express.Router();

router.get('/users', getUsers);

router.post('/users', addUser);

router.get('/users/:id', getUserById);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUser);

export default router;

import express from 'express';
import controller from '../controllers/users';
const router = express.Router();

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);
router.put('/users/:id', controller.updateUser);
router.delete('/users/:id', controller.deleteUser);
router.post('/users', controller.addUser);



export = router;

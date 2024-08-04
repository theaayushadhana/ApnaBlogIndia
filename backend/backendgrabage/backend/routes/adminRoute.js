import express from 'express';
import updateUserRole from '../controller/admin.js'
const router = express.Router();

router.put('/users/:userId/make-admin' , updateUserRole);


export default router;
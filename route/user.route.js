import express from 'express';
import { login, sigup } from '../controller/user.collroller.js';
const router = express.Router();

router.post("/signup", sigup);
router.post("/login", login);

export default router;
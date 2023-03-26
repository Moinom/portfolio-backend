import express from 'express';
import * as artControllers from '../controllers/artControllers';
const router = express.Router();

router.get('/', artControllers.getArt);

export default router;

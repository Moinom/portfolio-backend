import express from 'express';
import * as codeControllers from '../controllers/codeControllers';
const router = express.Router();

router.get('/', codeControllers.getCode);

export default router;

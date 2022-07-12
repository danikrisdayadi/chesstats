import express from 'express';
import asyncHandler from 'express-async-handler';
import { getStats } from './controllers.js';

const router = express.Router();

router.route('/:username1/:username2').get(asyncHandler(getStats))

export default router
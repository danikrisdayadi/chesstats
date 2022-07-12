import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import logger from 'morgan';
import { testRoute } from '../routes/testRoute.js';

const __dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
app.use(logger('dev'));
app.use(express.json({ limit: '5mb' }));

// Declare Routes
app.use('/', testRoute);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server has successfully run at port ${process.env.PORT || 3000}`)
});
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import logger from 'morgan';
import router from './route.js';

const __dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
app.use(logger('dev'));
app.use(express.json({ limit: '5mb' }));

// Declare Routes
app.use('/match', router);


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server has successfully run at port ${process.env.PORT || 5000}`)
});
import express from 'express';
import logger from 'morgan';
import router from './route.js';

const app = express();
app.use(logger('dev'));
app.use(express.json({ limit: '5mb' }));

// Declare Routes
app.use('/match', router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server has successfully run at port ${process.env.PORT || 5000}`) // eslint-disable-line
});
import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

export default app;

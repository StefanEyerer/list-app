import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import helmet from 'helmet';
import apiRouter from './router';

const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());

app.use('/api', apiRouter);

export default app;

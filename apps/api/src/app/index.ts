import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Hello World!' });
});

export default app;

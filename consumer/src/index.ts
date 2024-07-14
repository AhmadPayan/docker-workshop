import express, { Request, Response } from 'express';
import { receiveMessage } from './messageReceiver';

const app = express();
const port = 4000;

app.get('/receive', (req: Request, res: Response) => {
  const message = receiveMessage();
  res.send(message);
});

app.listen(port, () => {
  console.log(`Consumer running at http://localhost:${port}`);
});
import express, { Request, Response } from 'express';
import { sendMessage } from './messageSender';

const app = express();
const port = 3000;

app.get('/send', async (req: Request, res: Response) => {
  const response = await sendMessage();
  res.send(response);
});

app.listen(port, () => {
  console.log(`Producer running at http://localhost:${port}`);
});
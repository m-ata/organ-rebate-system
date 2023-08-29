import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import { router } from './router';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    await router(req, res);
  },
);

server.listen(port, () => console.log(`Server is listening on ${port}`));

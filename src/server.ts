import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(async (req, res) => {
  res.write('Organ Rebate System - Node.js Server');
  res.end();
});

server.listen(port, () => console.log(`Server is listening on ${port}`));

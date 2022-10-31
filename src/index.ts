import express, { Express } from 'express';
import { Server, Socket } from 'socket.io';

import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';

import { router } from './routes';
import { onConnection } from './Sockets/socketRouter';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
const server = app.listen(port, () => console.log(`Listening on Port: ${port}`));
const socket = http.createServer(app);

const corsOptions = {
  origin: 'http://localhost:3000', // client port
  credentials: true,
}


app.use('/', router);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

const io = new Server(socket, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }
}).listen(server);

io.on('connection', onConnection);


export default io;
import { Socket } from 'socket.io';
import io from '../index';
import * as messageController from './sControllers/messages';
import * as notifController from './sControllers/notifications';
import { notif, messages } from '../Utilities/Strings/sockets';

export async function onConnection (socket: Socket) {
  console.log('Socket Connected', messages.example);

  socket.on(messages.example, messageController.example);

  socket.on(notif.notifExample, notifController.notifExample);
}
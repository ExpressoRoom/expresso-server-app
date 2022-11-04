import { Socket } from 'socket.io';
import io from '../index';
import * as messageController from './sControllers/messages';
import * as notifController from './sControllers/notifications';
import { notif, messages, rooms } from '../Utilities/Strings/sockets';
import { Messages, User } from '../Utilities/Strings/interfaces/Chats';

export async function onConnection (socket: Socket ) {
  console.log(`user: ${socket.id} has connected to the socket channel`);

  socket.on(rooms.join, messageController.join.bind(socket))

  socket.on(rooms.leave, messageController.leave.bind(socket))

  socket.on(messages.send, messageController.send.bind(socket));

  socket.on('disconnect', (): void => {
    console.log(`user: ${socket.id} has disconnected from the socket channel`)
  })

}
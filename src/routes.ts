import { Router } from 'express';
import { Socket } from 'socket.io';

import { notif, messages, rooms } from './Utilities/Strings/sockets';
import { Messages, User } from './Utilities/Interfaces/Chats';
import * as messageController from './Controllers/messages';
import * as notifController from './Controllers/notifications';
import * as NotesController from './Controllers/Notes';
import * as Users from './Controllers/Users';

export const router = Router();

// ****************************** PROJECTS ****************************** //

router.get('projects', NotesController.examplefunction);


// ****************************** USERS ****************************** //

router.post('newAccount', Users.createAccount);

// ****************************** [INSERT COMPONENT NAME] ****************************** //


// ****************************** [INSERT COMPONENT NAME] ****************************** //


// ****************************** [INSERT COMPONENT NAME] ****************************** //


// ****************************** MESSAGES ****************************** //

export async function socketRouter ( socket: Socket ) {

  console.log(`user: ${socket.id} has connected to the socket channel`);

  socket.on(rooms.join, messageController.join.bind(socket));

  socket.on(rooms.leave, messageController.leave.bind(socket));

  socket.on(messages.send, messageController.send.bind(socket));

  socket.on('disconnect', (): void => {
    console.log(`user: ${socket.id} has disconnected from the socket channel`)
  })

}
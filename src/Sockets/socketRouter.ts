import { Socket } from 'socket.io';
import io from '../index';
import { Messages, User } from '../Utilities/Strings/interfaces/Chats';

export async function onConnection (socket: Socket ) {
  console.log(`user: ${socket.id} has connected to the socket channel`);

  socket.on('join_rooms', (userData: User): void => {
    console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
    socket.join(userData.rooms);
  })

  socket.on('leave_rooms', (userData: User): void => {
    const rooms: string[] = userData.rooms;
    rooms.forEach((room: string): void => {
      socket.leave(room)
    });
    console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
  })

  socket.on('send_message', (messageData: Messages): void => {
    console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \n the recipient(s) are in chatroom: ${messageData.chatId}`);
    socket.broadcast.to(messageData.chatId).emit('recieve_message', messageData);
  })

  socket.on('disconnect', (): void => {
    console.log(`user: ${socket.id} has disconnected from the socket channel`)
  })


}
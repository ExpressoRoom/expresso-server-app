import { Socket } from "socket.io";
import { Messages } from "../../Utilities/Interfaces/Chats";
import { User } from "../../Utilities/Strings/interfaces/Chats";

export function send (messageData: Messages, socket: Socket): void {
  console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \n the recipient(s) are in chatroom: ${messageData.chatId}`);
  socket.broadcast.to(messageData.chatId).emit('receive_message', messageData);
}

export function join (userData: User, socket: Socket): void {
  console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
  socket.join(userData.rooms);
}

export function leave (userData: User, socket: Socket): void {
  const rooms: string[] = userData.rooms;
  rooms.forEach((room: string): void => {
    socket.leave(room)
  });
  console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
}

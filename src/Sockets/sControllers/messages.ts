import { Socket } from "socket.io";
import { Messages } from "../../Utilities/Interfaces/Chats";
import { User } from "../../Utilities/Strings/interfaces/Chats";

export function send (this: Socket, messageData: Messages): void {
  console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \nthe recipient(s) are in chatroom: ${messageData.chatId}`);
  this.emit('receive_message', messageData);
  // this.broadcast.to(messageData.chatId).emit('receive_message', messageData);
}

export function join (this: Socket, userData: User): void {
  console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
  this.join(userData.rooms);
}

export function leave (this: Socket, userData: User): void {
  const rooms: string[] = userData.rooms;
  rooms.forEach((room: string): void => {
    this.leave(room)
  });
  console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
}

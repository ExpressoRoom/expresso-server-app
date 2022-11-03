"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConnection = void 0;
function onConnection(socket) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`user: ${socket.id} has connected to the socket channel`);
        socket.on('join_rooms', (userData) => {
            console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
            socket.join(userData.rooms);
        });
        socket.on('leave_rooms', (userData) => {
            const rooms = userData.rooms;
            rooms.forEach((room) => {
                socket.leave(room);
            });
            console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
        });
        socket.on('send_message', (messageData) => {
            console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \n the recipient(s) are in chatroom: ${messageData.chatId}`);
            socket.broadcast.to(messageData.chatId).emit('recieve_message', messageData);
        });
        socket.on('disconnect', () => {
            console.log(`user: ${socket.id} has disconnected from the socket channel`);
        });
    });
}
exports.onConnection = onConnection;

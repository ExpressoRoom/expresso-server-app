"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leave = exports.join = exports.send = void 0;
function send(messageData, socket) {
    console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \n the recipient(s) are in chatroom: ${messageData.chatId}`);
    socket.broadcast.to(messageData.chatId).emit('receive_message', messageData);
}
exports.send = send;
function join(userData, socket) {
    console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
    socket.join(userData.rooms);
}
exports.join = join;
function leave(userData, socket) {
    const rooms = userData.rooms;
    rooms.forEach((room) => {
        socket.leave(room);
    });
    console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
}
exports.leave = leave;

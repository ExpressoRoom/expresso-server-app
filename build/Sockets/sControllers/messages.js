"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leave = exports.join = exports.send = void 0;
function send(messageData) {
    console.log(`the following data was recieved from user: ${messageData.username}: ${messageData} \nthe recipient(s) are in chatroom: ${messageData.chatId}`);
    this.emit('receive_message', messageData);
    // this.broadcast.to(messageData.chatId).emit('receive_message', messageData);
}
exports.send = send;
function join(userData) {
    console.log(`${userData.username} has joined the following rooms: ${userData.rooms}`);
    this.join(userData.rooms);
}
exports.join = join;
function leave(userData) {
    const rooms = userData.rooms;
    rooms.forEach((room) => {
        this.leave(room);
    });
    console.log(`${userData.username} has left the following rooms: ${userData.rooms}`);
}
exports.leave = leave;

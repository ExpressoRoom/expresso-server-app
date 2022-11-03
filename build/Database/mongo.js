"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, mongoose_1.connect)(`mongodb://localhost:27017/${process.env.DB_NAME}`)
    .then(res => console.log(`Connected to mongoDB: ${process.env.DB_NAME}`))
    .catch(err => console.log(`Error connecting to ${process.env.DB_NAME}: ${err}`));
const chatSchema = new mongoose_1.Schema({
    chatName: String,
    users: (Array),
    messages: (Array),
});
const Chat = (0, mongoose_1.model)('Chat', chatSchema);

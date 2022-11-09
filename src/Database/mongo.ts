import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';
import * as I from './../Utilities/Interfaces/Chats';

dotenv.config();

connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
  .then(res => console.log(`Connected to mongoDB: ${process.env.DB_NAME}`))
  .catch(err => console.log(`Error connecting to ${process.env.DB_NAME}: ${err}`));

const userSchema = new Schema ({
  userID: String,
  username: String,
  chats: Array<String>,
})

const chatSchema = new Schema<I.Chat> ({
  chatName: String,
  users: Array<String>,
  messages: Array<I.Messages>,
})

export const User = model('User', userSchema);
export const Chat = model('Chat', chatSchema);
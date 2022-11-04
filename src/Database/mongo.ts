import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';
import * as I from './../Utilities/Interfaces/Chats';

dotenv.config();

connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
  .then(res => console.log(`Connected to mongoDB: ${process.env.DB_NAME}`))
  .catch(err => console.log(`Error connecting to ${process.env.DB_NAME}: ${err}`));

const chatSchema = new Schema<I.Chat> ({
  chatName: String,
  users: Array<String>,
  messages: Array<I.Messages>,
})

const Chat = model('Chat', chatSchema);

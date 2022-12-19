import * as mongo from '../../Database/mongo';
import * as I from '../../Utilities/Interfaces/Chats';

export async function getUserChats (username: String): Promise<any> {
  try {
    return await mongo.User.find({username: username}).exec();
  } catch (err) {
    console.error(err);
  }
}

export async function getChatInfo (chatID: String[]): Promise<any> {
  try {
    return await mongo.Chat.find({'_id': {$in: chatID}}).exec();
  } catch (err) {
    console.error(err);
  }
}

export async function addUser (username: String): Promise<any> {
  try {

  } catch (err) {
    console.error(err);
  }
}

export async function updateChat (message: I.Messages): Promise<any> {
  try {

  } catch (err) {
    console.error(err);
  }
}

export async function removeUser (username: String): Promise<any> {
  try {

  } catch (err) {
    console.error(err);
  }
}

export async function addReaction (message: I.Messages): Promise<any> {
  try {

  } catch (err) {
    console.error(err);
  }
}

export async function createChat (message: I.Messages): Promise<any> {
  try {

  } catch (err) {
    console.error(err);
  }
}
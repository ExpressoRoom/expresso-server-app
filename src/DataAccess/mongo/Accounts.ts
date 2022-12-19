import { User } from '../../Database/mongo';

export async function createUser (userID: Number, username: String): Promise<void> {
  try {
    User.create({
      userID: userID,
      username: username
    })
  } catch (err: any) {
    throw new Error(err);
  }
}
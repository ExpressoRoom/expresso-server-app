import { Request, Response } from 'express';
import * as pwHash from 'password-hash';

import * as postgres from '../DataAccess/postgres/Accounts';
import * as mongo from '../DataAccess/mongo/Accounts';

export async function createAccount(req: Request, res: Response): Promise<void> {
  try {
    const { username, password, email } = req.body
    // create user data on postgres, return userID for mongo
    const userID = Number(await postgres.createAccount(username, pwHash.generate(password), email));

    // create user data on mongo
    await mongo.createUser(userID, username);

    res.sendStatus(201);
  } catch (err: any) {
    console.log(`Server side err: Create new account FAILED: ${err}`);
    res.sendStatus(500);
  }
}
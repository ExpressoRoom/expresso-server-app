import { QueryResult } from 'pg';
import { pgsql } from '../../Database/postgres';
import { get, insert } from './../../Utilities/Strings/queries';

export async function createAccount(
  username: string,
  password: string,
  email: string
):Promise<QueryResult<any>> {
  try {
    await pgsql.query(insert.accounts.newAccount(username, password, email, new Date()));
    return await pgsql.query(get.accounts.idByUsername(username));
  } catch (err: any) {
    throw new Error(err);
  }
}
// Put your postgres query string in here!

export const get = {
  accounts: {
    idByUsername: (username: string): string => `SELECT user_id FROM accounts where username = ${username}`
  }
}

export const insert = {
  accounts: {
    newAccount: (
      username: string,
      password: string,
      email: string,
      date: Date
    ): string => `INSERT INTO VALUES (${username}, ${password}, ${email}, ${date})`
  }
}
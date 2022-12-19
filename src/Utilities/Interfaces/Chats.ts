export interface User {
  userId: string,
  username: string,
  rooms: string[]
}

export interface Chat {
  chatName: string,
  users: string[],
  messages: Messages[]
}

export interface Messages {
  chatId: string,
  messageId: string,
  username: string,
  text: string,
  time: Date,
  reactions: Reactions
}

export interface Reactions {
  like: number,
  dislike: number,
  laugh: number,
  mad: number,
  surprise: number,
  confused: number
}
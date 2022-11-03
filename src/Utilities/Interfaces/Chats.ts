export interface Chat {
  chatName: String,
  users: String[],
  messages: Messages[],
}

export interface Messages{
  chatId: String,
  messageId: String,
  username: String,
  text: String,
  time: Date,
  reactions: Reactions,
}

export interface Reactions {
  like: Number,
  dislike: Number,
  laugh: Number,
  mad: Number,
  surprise: Number,
  confused: Number
}
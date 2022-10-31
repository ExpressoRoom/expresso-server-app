import { Socket } from 'socket.io';
import io from '../index';

export async function onConnection (socket: Socket ) {
  console.log('Socket Connected')
}
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(socket: Socket, data: any): void {
    const { message, nickname } = data;
    socket.broadcast.emit('message', `${nickname}: ${message}`);

    // this.server.emit('message', `client-${socket.id.substring(0, 4)}:${data}`);
  }
}

@WebSocketGateway({ namespace: 'room' })
export class RoomGateway {
  rooms: string[] = [];

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createRoom')
  handleMessage(@MessageBody() data: { nickname: string; room: string }) {
    const { nickname, room } = data;
    this.rooms.push(room);
    this.server.emit('rooms', this.rooms);
  }
}

import { Injectable } from 'angular2/core';
import { ROOMS } from './mock-rooms';
import { Room } from './room';

@Injectable()
export class RoomService {
  getRooms() {
      return Promise.resolve(ROOMS);
  }

  getRoom(id: number) {
      return Promise.resolve(ROOMS)
        .then(rooms => rooms.filter(room => room.id === id)[0]
      );
  }

  saveRoom(room: Room) {
      ROOMS.push(room);
  }

  removeRoom(roomId: number) {
<<<<<<< HEAD
    //ROOMS = ROOMS.filter(room => room.id !== roomId);
=======
      ROOMS.filter(room => room.id !== roomId);
>>>>>>> f40145abf0247fc688a8f41702de8cfe957473aa
  }
}

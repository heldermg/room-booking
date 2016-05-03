import {Injectable} from 'angular2/core';
import {ROOMS} from './mock-rooms';
import {Room} from './room';

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
}

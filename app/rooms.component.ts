import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Room } from './room';
import { RoomDetailComponent } from './room-detail.component';
import { RoomService } from './room.service';

@Component({
    selector: 'rooms',
    templateUrl: 'app/rooms.component.html',
    styleUrls: ['app/rooms.component.css'],
    directives: [RoomDetailComponent]
})

export class RoomsComponent implements OnInit {
    rooms: Room[];
    selectedRoom: Room;

    constructor(
        private _router: Router,
        private _roomService: RoomService) {
    }

    getRooms() {
        this._roomService.getRooms().then(rooms => this.rooms = rooms);
    }

    ngOnInit() {
        this.getRooms();
    }

    //onSelect(room: Room) { this.selectedRoom = room; }

    gotoDetail(room: Room) {
        this._router.navigate(['RoomDetail', { id: room.id }])
    }
}

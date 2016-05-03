import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room } from './room';
import { RoomDetailComponent } from './room-detail.component';
import { RoomService } from './room.service';

@Component({
    selector: 'room-list',
    templateUrl: 'app/room/room-list.component.html',
    styleUrls: ['app/room/room-list.component.css'],
    directives: [RoomDetailComponent]
})

export class RoomListComponent implements OnInit {
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

    gotoDetail(room: Room) {
        this._router.navigate(['RoomDetail', { id: room.id }])
    }
}

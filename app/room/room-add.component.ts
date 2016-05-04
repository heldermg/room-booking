import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
    selector: 'room-add',
    templateUrl: 'app/room/room-add.component.html'
    /*styleUrls: ['app/room/room-detail.component.css']*/
})

export class RoomAddComponent implements OnInit {
    @Input() room: Room;

    constructor(
        private _router: Router,
        private _roomService: RoomService) {
    }

    ngOnInit() {
        this.room = new Room();
    }

    goBack() {
      window.history.back();
    }

    save() {
      this._roomService.saveRoom(this.room);
      this._router.navigate(['Rooms']);
    }
}

import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'room-detail',
  templateUrl: 'app/room/room-detail.component.html',
  styleUrls: ['app/room/room-detail.component.css']
})

export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor(
    private _roomService: RoomService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._roomService.getRoom(id)
      .then(room => this.room = room);
  }

  goBack() {
    window.history.back();
  }
}

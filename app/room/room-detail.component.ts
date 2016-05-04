import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Room } from './room';
import { RoomService } from './room.service';
import { BookingListComponent } from '../booking/booking-list.component';

@Component({
  selector: 'room-detail',
  directives: [BookingListComponent],
  templateUrl: 'app/room/room-detail.component.html',
  styleUrls: ['app/room/room-detail.component.css']
})

export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor(
    private _routeParams: RouteParams,
    private _roomService: RoomService) {
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

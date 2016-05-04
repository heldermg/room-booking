import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RoomService } from './room/room.service';
import { BookingService } from './booking/booking.service';
import { RoomListComponent } from './room/room-list.component';
import { RoomAddComponent } from './room/room-add.component';
import { RoomDetailComponent } from './room/room-detail.component';

@Component({
  selector: 'room-booking',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    RoomService,
    BookingService
  ]
})

@RouteConfig([
    {
        path: '/rooms',
        name: 'Rooms',
        component: RoomListComponent,
    },
    {
        path: '/room/add',
        name: 'RoomAdd',
        component: RoomAddComponent
    },
    {
        path: '/room/detail/:id',
        name: 'RoomDetail',
        component: RoomDetailComponent
    }
])

export class AppComponent {
    title = 'Room Booking';
}

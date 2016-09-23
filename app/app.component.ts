import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RoomService } from './room/room.service';
import { RoomListComponent } from './room/room-list.component';
import { RoomAddComponent } from './room/room-add.component';
import { RoomDetailComponent } from './room/room-detail.component';
import { BookingService } from './booking/booking.service';
import { BookingListComponent } from './booking/booking-list.component';
import { BookingAddComponent } from './booking/booking-add.component';
import { BookingDetailComponent } from './booking/booking-detail.component';

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
    },
    {
        path: '/booking/add/:id',
        name: 'BookingAdd',
        component: BookingAddComponent
    },
    {
        path: '/booking/detail/:id',
        name: 'BookingDetail',
        component: BookingDetailComponent
    }
])

export class AppComponent {
    title = 'Room Booking';
}

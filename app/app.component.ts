import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RoomService }     from './room.service';
import { RoomsComponent } from './rooms.component';
import { RoomDetailComponent } from './room-detail.component';
//import { MenuComponent } from './menu.component';

@Component({
  selector: 'room-booking',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    RoomService
  ]
})

@RouteConfig([
    {
        path: '/rooms',
        name: 'Rooms',
        component: RoomsComponent,
    },
    {
        path: '/detail/:id',
        name: 'RoomDetail',
        component: RoomDetailComponent
    }
])

export class AppComponent {
    title = 'Room Booking';
}

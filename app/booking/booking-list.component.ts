import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { Booking } from './booking';
import { BookingService } from './booking.service';
import { RoomService } from '../room/room.service';
import { Room } from '../room/room';

@Component({
    selector: 'booking-list',
    templateUrl: 'app/booking/booking-list.component.html',
    styleUrls: ['app/booking/booking-list.component.css']
})

export class BookingListComponent implements OnInit {
    bookings: Booking[];
    roomId: number;

    constructor(
        private _routeParams: RouteParams,
        private _router: Router,
        private _bookingService: BookingService,
        private _roomService: RoomService) {
    }

    getBookingsByRoom(roomId: number) {
        this._bookingService.getBookingsByRoom(roomId)
            .then(bookings => this.bookings = bookings);
    }

    ngOnInit() {
        this.roomId = +this._routeParams.get('id');
        this.getBookingsByRoom(this.roomId);
    }

    gotoAddBooking() {
        this._router.navigate(['BookingAdd', {id: this.roomId}]);
    }

    gotoDetailBooking(booking: Booking) {
        this._router.navigate(['BookingDetail', {id: booking.id}]);
    }
}

import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
    selector: 'booking-list',
    templateUrl: 'app/booking/booking-list.component.html'
    //styleUrls: ['app/booking/booking-list.component.css'],
})

export class BookingListComponent implements OnInit {
    bookings: Booking[];

    constructor(
        private _routeParams: RouteParams,
        private _bookingService: BookingService) {
    }

    getBookingsByRoom(roomId: number) {
        this._bookingService.getBookingsByRoom(roomId)
            .then(bookings => this.bookings = bookings);
    }

    ngOnInit() {
        let roomId = +this._routeParams.get('id');
        this.getBookingsByRoom(roomId);
    }
}

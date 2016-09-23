import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
    selector: 'booking-add',
    templateUrl: 'app/booking/booking-add.component.html'
    /*styleUrls: ['app/room/room-detail.component.css']*/
})

export class BookingAddComponent implements OnInit {
    @Input() booking: Booking;

    constructor(
        private _routeParams: RouteParams,
        private _router: Router,
        private _bookingService: BookingService) {
    }

    ngOnInit() {
        this.booking = new Booking();
        this.booking.room = +this._routeParams.get('id');
    }

    goBack() {
      window.history.back();
    }

    save() {
      this._bookingService.saveBooking(this.booking);
      this._router.navigate(['RoomDetail', {id: this.booking.room}]);
    }
}

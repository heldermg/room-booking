import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
  selector: 'booking-detail',
  templateUrl: 'app/booking/booking-detail.component.html'
  /*styleUrls: ['app/booking/booking-detail.component.css']*/
})

export class BookingDetailComponent implements OnInit {
  @Input() booking: Booking;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _bookingService: BookingService) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._bookingService.getBooking(id)
      .then(booking => this.booking = booking);
  }

  goBack() {
    window.history.back();
  }
}

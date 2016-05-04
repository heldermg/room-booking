import { Injectable } from 'angular2/core';
import { BOOKINGS } from './mock-bookings';
import { Booking } from './booking';

@Injectable()
export class BookingService {
  saveBooking(booking: Booking) {
    BOOKINGS.push(booking);
  }

  removeBooking(bookingId: number) {
    BOOKINGS = BOOKINGS.filter(booking => booking.id !== bookingId);
  }

  getBookingsByRoom(roomId: number) {
    return Promise.resolve(BOOKINGS)
      .then(bookings => bookings.filter(booking => booking.room.id === roomId)
    );
  }

  getBooking(id: number) {
    return Promise.resolve(BOOKINGS)
      .then(bookings => bookings.filter(booking => booking.id === id)[0]
    );
  }
}

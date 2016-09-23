import { Injectable } from 'angular2/core';
import { BOOKINGS } from './mock-bookings';
import { Booking } from './booking';

@Injectable()
export class BookingService {
  saveBooking(booking: Booking) {
    BOOKINGS.push(booking);
  }

  removeBooking(bookingId: number) {
<<<<<<< HEAD
    //BOOKINGS = BOOKINGS.filter(booking => booking.id !== bookingId);
=======
    BOOKINGS.filter(booking => booking.id !== bookingId);
>>>>>>> f40145abf0247fc688a8f41702de8cfe957473aa
  }

  getBookingsByRoom(roomId: number) {
    return Promise.resolve(BOOKINGS)
      .then(bookings => bookings.filter(booking => booking.room === roomId)
    );
  }

  getBooking(id: number) {
    return Promise.resolve(BOOKINGS)
      .then(bookings => bookings.filter(booking => booking.id === id)[0]
    );
  }
}

import { Room } from '../room/room';

export class Booking {
    id: number;
    room: Room;
    subject: string;
    startDate: string;
    endDate: string;
}

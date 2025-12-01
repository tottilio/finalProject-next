export interface Admin {
    id: number; 
    email: string;
    name: string;
    lastname: string;
    password: string;
}

export interface User{
    id: number;
    name: string;
    lastname: string
    email: string;
    password: string;
    reservations: ReservationSeat[];
}

export interface Route {
    id: number;
    deperture: string; 
    arrival: string;
    name: string;
    timetables: BusTimeTable[];
}

export interface ReservationSeat {
    id: number;
    reserve_num: number;
    user: User;
    timetable: BusTimeTable;
}

export interface BusTimeTable {
  id: number;
  fk_route: number;
  date: Date;
  fk_bus: number;
  departure_time: Date;
  arrival_time: Date;
  route: Route;
  bus: Bus;
  reservations: ReservationSeat[];
}

export interface Bus {
  id: number;
  name: string;
  model: string;
  total_seat: number;
  timetables: BusTimeTable[];
}
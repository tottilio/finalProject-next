import Link from "next/link";
import RoutePage from "./routes/page";
import ReservationPage from "./reservations/page";
import BusTableTimesPage from "./bus-time-table/page";

const DashboardPage = () => {
    return (
        <div className=" flex flex-col">
            <Link href={{pathname:'/dashboard/routes'}}>
                Rutas
            </Link>
            <Link href={{pathname:'/dashboard/reservations'}}>
                Reservaciones
            </Link>
            <Link href={{pathname:'/dashboard/bus-time-table'}}>
                Horarios
            </Link>
            
        </div>
    );
}
 
export default DashboardPage;
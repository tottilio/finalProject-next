import Link from "next/link";

const RoutesList = () => {
    return (
        <div className=" flex flex-col">
            <Link href={{pathname:'/routes'}}>
                Rutas
            </Link>
            <Link href={{pathname:'/reservations'}}>
                Reservaciones
            </Link>
            <Link href={{pathname:'/bus-time-table'}}>
                Horarios
            </Link>           
        </div>
    );
}
 
export default RoutesList;
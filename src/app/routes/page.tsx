import Link from "next/link";
import { Route } from "../../../entities";
import RouteCard from "./_components/RouteCard";
import { API_URL } from "../../../constants";
import { Button } from "@heroui/react";


const RoutePage = async () => {

    const res = await fetch(`${API_URL}/routes`)
    const routes: Route[] = await res.json()

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Rutas</h1>
            {routes.map((route) => {
                return (
                    <div key={route.id} className="mb-5">
                        <RouteCard route={route} />
                        <button className="bg-blue-500 p-4 ">
                            <Link className="text-white" href={`routes/${route.id}`} >Reservar</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default RoutePage;
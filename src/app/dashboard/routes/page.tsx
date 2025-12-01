import { LucideArrowRight, LucideArrowRightFromLine } from "lucide-react";
import { API_URL } from "../../../../constants";
import { Route } from "../../../../entities";
import { Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';

import Link from "next/link";
import RouteCard from "./_components/RouteCard";

const RoutePage = async () => {

    const resRoutes = await fetch(`${API_URL}/routes`)
    const routes: Route[] = await resRoutes.json();

    return (
        <div>
            <h1>Rutas</h1>
            {routes.map((route) => {
                return (
                    <RouteCard key={route.id} route={route}/>
                )
            })}
        </div>
    );
}

export default RoutePage;
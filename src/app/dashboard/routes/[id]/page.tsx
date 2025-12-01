'use client'
import { API_URL } from "../../../../../constants";
import { Route } from "../../../../../entities";
import { LucideArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@mui/material";

const EspecificRoute = async ({ params }: { params: { id: string } }) => {

    const res = await fetch(`${API_URL}/routes/${params.id}`)
    const route: Route = await res.json();
    return (
        <div>
            <Card>
                
                <CardContent>
                    <p>{route.name}</p>
                    <p>{route.arrival}</p>
                    <p>{route.deperture}</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default EspecificRoute;
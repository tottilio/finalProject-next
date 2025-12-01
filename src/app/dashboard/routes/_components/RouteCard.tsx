import { Card, CardContent, Typography } from "@mui/material";
import { Route } from "../../../../../entities";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

const RouteCard = ({route}: {route:Route}) => {
    return (
        <Card key={route.id} className="bg-slate-300 mb-5" >
            <CardContent >
                <Typography>
                    <Link href={`routes/${route.id}`}>{route.name}</Link>
                </Typography>
                <Typography>
                    <div className="flex flex-row">
                        <p>{route.arrival} </p>
                        <LucideArrowRight />
                        <p>{route.deperture}</p>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RouteCard;
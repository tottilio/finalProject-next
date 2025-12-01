import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Route } from "../../../../entities";
import { LucideArrowRight } from "lucide-react";

const RouteCard = ({route}: {route:Route}) => {
    return (
        <Card key={route.id} className="bg-slate-300 py-5 px-10 max-w-[500px] min-w-[500px]"  >
            <CardHeader>
                    <p className="font-bold">{route.name}</p>
            </CardHeader>
            <Divider/>
            <CardBody >
                    <div className="flex flex-row">
                        <p>{route.arrival} </p>
                        <LucideArrowRight />
                        <p>{route.deperture}</p>
                    </div>
            </CardBody>
        </Card>
    );
}

export default RouteCard;
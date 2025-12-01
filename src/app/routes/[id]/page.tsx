import { LucideArrowRight } from "lucide-react";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Route } from "../../../../entities";
import { API_URL } from "../../../../constants";

const EspecificRoute = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${API_URL}/routes/${params.id}`, {
        next: {
            tags: [`routes:${params.id}`]
        }
    });

    const route: Route = await res.json();

    return (
        <div className="flex flex-col justify-center items-center">
            <Card className="text-xl bg-slate-200 rounded-md max-m-[700px] ">
                <CardHeader>
                    <p className="font-bold">{route.name}</p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p>{route.arrival}</p>
                    <LucideArrowRight />
                    <p>{route.deperture}</p>
                </CardBody>
            </Card>
        
            
        </div>
    );
};

export default EspecificRoute;

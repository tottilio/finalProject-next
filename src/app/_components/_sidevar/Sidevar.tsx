import { LucideBus, LucideRoute, LucideTicket, LucideUser, LucideUsers, LucideWheat } from "lucide-react";
import NavItem from "./NavItem";

const SidebarPage = () => {
    return (
        <nav className="w-1/12 min-w-[8.3333%] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
            <NavItem icon={<LucideTicket className="size-14" />} path={'/dashboard/reservations'} />
            <NavItem icon={<LucideBus className="size-14" />} path={'/dashboard/bus-time-table'} />
            <NavItem icon={<LucideRoute className="size-14" />} path={'/dashboard/routes'} />
        </nav>
    );
}
 
export default SidebarPage;
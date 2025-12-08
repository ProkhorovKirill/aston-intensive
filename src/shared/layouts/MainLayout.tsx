import { Outlet } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/ui/UserTabs";

export default function MainLayout() {
    return (
        <>
            <UserTabs />
            <main>
                <Outlet />
            </main>
        </>
    )
}
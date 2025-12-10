import { Outlet } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/ui/UserTabs";
import Footer from "../../widgets/LayoutFooter/Footer";
import ThemeProvider from "../lib/theme/ThemeProvider";
import Header from "../../widgets/LayoutHeader/Header";

export default function MainLayout() {
    return (
        <>
            <ThemeProvider>
                <Header/>
            </ThemeProvider>
            <nav>
                <UserTabs />
            </nav>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
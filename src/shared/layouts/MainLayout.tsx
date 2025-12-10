import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";

export default function MainLayout ({children}: {children: React.ReactNode}) {

    return (

        <>
        
            <Header />
                {children}
            <Footer />

        </>

    )

}
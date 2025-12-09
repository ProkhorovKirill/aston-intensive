import PostList from "../../widgets/PostList/PostList";
import Header from "../../widgets/LayoutHeader/Header";
import sharedStyles from '../ui/shared.module.css';
import Footer from "../../widgets/LayoutFooter/Footer";

export default function MainLayout() {

    return (

        <>
            <Header />
            <h1 className={sharedStyles.centralTitle}>Лента новостей</h1>
            <PostList />
            <Footer />
        </>

    ) 

}
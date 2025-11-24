import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from './header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <ThemeSwitcher/>
            
        </header>
    )

}
import useTheme from "../../../shared/lib/theme/useTheme";
import Button from "../../../shared/ui/Button";
import styles from './themeSwitcher.module.css'

export default function ThemeSwitcher() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={styles.themeSwitcherWrapper}>
            <p className="">Переключить тему:</p>
            <Button onClick={toggleTheme} 
                    textValue={theme === 'light' ? '☀️' : '🌙'} 
                    className={styles.themeSwitcherButton}/>
        </div>
    )

}
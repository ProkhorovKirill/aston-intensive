import { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from './header.module.css'
import Button from "../../shared/ui/Button";
import Modal from "../../shared/ui/Modal";

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleIsOpen() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        
        <header className={styles.header}>
            <ThemeSwitcher/>
            <Button onClick={handleIsOpen} className="" textValue="Информация о проекте"/>
            <Modal isOpen={isOpen} onClose={closeModal} />
        </header>
    )

}
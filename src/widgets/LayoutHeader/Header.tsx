import { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from './header.module.css'
import Button from "../../shared/ui/Button";
import Modal from "../../shared/ui/Modal";
import modalStyles from '../../shared/ui/modal.module.css'

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
            <Modal isOpen={isOpen}>
                <div className={modalStyles.modalWindow}>
                    <p>
                        Добро пожаловать в мой учебный проект!

                        Это веб-приложение было разработано в образовательных целях для отработки практических навыков работы с современными веб-технологиями.

                        В рамках данного проекта реализована лента новостей, которая демонстрирует базовые принципы взаимодействия клиентской части с внешним источником данных. Информация для отображения загружается из публичного тестового API, что позволяет имитировать работу с реальным сервером.
                    </p>
                    <Button onClick={closeModal} className="" textValue="Закрыть"/>
                </div>
            </Modal>
        </header>
    )

}
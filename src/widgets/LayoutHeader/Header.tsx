import { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from './header.module.css'
import modalStyles from '../../shared/ui/modal.module.css'
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
            <Button onClick={handleIsOpen} className={styles.modalButton} textValue="Информация о проекте"/>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Header>
                    Добро пожаловать в мой учебный проект!
                </Modal.Header>
                <Modal.Body>
                    Это веб-приложение было разработано в образовательных целях для отработки практических навыков работы с современными веб-технологиями.

                    В рамках данного проекта реализована лента новостей, которая демонстрирует базовые принципы взаимодействия клиентской части с внешним источником данных. Информация для отображения загружается из публичного тестового API, что позволяет имитировать работу с реальным сервером.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal} className={modalStyles.closeModalButton} textValue="Закрыть"/>
                </Modal.Footer>
            </Modal>
        </header>
    )

}
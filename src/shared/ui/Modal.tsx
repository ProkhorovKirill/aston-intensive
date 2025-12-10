import ReactDOM from 'react-dom';
import styles from './modal.module.css'
import Button from "./Button";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
}

export default function Modal({isOpen, onClose} : ModalProps) {

    const modal = document.getElementById('portal-root');

    if (!isOpen || !modal) {
        return null;
    }

    function handleOverlayCLick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) onClose();
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={handleOverlayCLick}>
            <div className={styles.modalWindow}>
                    <p>
                        Добро пожаловать в мой учебный проект!

                        Это веб-приложение было разработано в образовательных целях для отработки практических навыков работы с современными веб-технологиями.

                        В рамках данного проекта реализована лента новостей, которая демонстрирует базовые принципы взаимодействия клиентской части с внешним источником данных. Информация для отображения загружается из публичного тестового API, что позволяет имитировать работу с реальным сервером.
                    </p>
                    <Button onClick={onClose} className={styles.closeModalButton} textValue="Закрыть"/>
                </div>
        </div>,
        modal
    )

}
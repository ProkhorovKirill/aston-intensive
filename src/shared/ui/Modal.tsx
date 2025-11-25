import type { ReactNode } from "react";
import ReactDOM from 'react-dom';
import styles from './modal.module.css'

interface ModalProps {
    isOpen: boolean,
    children: ReactNode,
}

export default function Modal({isOpen, children} : ModalProps) {

    const modal = document.getElementById('portal-root');

    if (!isOpen || !modal) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            {children}
        </div>,
        modal
    )

}
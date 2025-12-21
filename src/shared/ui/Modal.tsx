import ReactDOM from 'react-dom';
import styles from './modal.module.css'
import useScrollLock from '../lib/scrollLock/useScrollLock';
import type { PropsWithChildren } from 'react';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
}

export default function Modal({isOpen, onClose, children} : ModalProps) {

    const modal = document.getElementById('portal-root');

    useScrollLock(isOpen);

    if (!isOpen || !modal) {
        return null;
    }

    function handleOverlayCLick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) onClose();
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={handleOverlayCLick}>
            <div className={styles.modalWindow}>
                {children}        
            </div>
        </div>,
        modal
    )

}

Modal.Header = function ModalHeader({children} : PropsWithChildren) {
    return <div>{children}</div>
}

Modal.Body = function ModalBody({children} : PropsWithChildren) {
    return <div>{children}</div>
}

Modal.Footer = function ModalFooter({children} : PropsWithChildren) {
    return <div>{children}</div>
}
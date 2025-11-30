import ReactDOM from 'react-dom';
import styles from './modal.module.css'
import useScrollLock from '../lib/scrollLock/useScrollLock';

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

interface SubcomponentsProps {
    children: React.ReactNode,
}

Modal.Header = function ModalHeader({children} : SubcomponentsProps) {
    return <div>{children}</div>
}

Modal.Body = function ModalBody({children} : SubcomponentsProps) {
    return <div>{children}</div>
}

Modal.Footer = function ModalFooter({children} : SubcomponentsProps) {
    return <div>{children}</div>
}
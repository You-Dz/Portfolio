import Modal from "react-modal";
import './BaseModal.scss';

function BaseModal({ isOpen, onClose, className = '', children }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={`base-modal ${className}`}
            overlayClassName='base-modal_overlay'
            closeTimeoutMS={200}>

            <button className="modal-close" onClick={onClose} aria-label="Fermer la modale">
                &times;
            </button>

            {children}
        </Modal>
    );
}
export default BaseModal;
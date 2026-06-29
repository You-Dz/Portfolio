import BaseModal from "../BaseModal/BaseModal";
import './FormModal.scss';

function FormModal({ isOpen, onClose, title, onSubmit, error, submitLabel = "Valider", className = '', children }) {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} className={`form-modal ${className}`}>
            <section className="modal-header">
                <h2 className="modal-title">{title}</h2>
            </section>

            <form
                className="modal-body"
                onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>

                {children}

                {error && <p className="form-error">{error}</p>}

                <footer className="modal-footer">
                    <button type="button" className="btn-cancel" onClick={onClose}>
                        Annuler
                    </button>
                    <button type="submit" className="btn-submit">
                        {submitLabel}
                    </button>
                </footer>
            </form>
        </BaseModal>
    );
}
export default FormModal;
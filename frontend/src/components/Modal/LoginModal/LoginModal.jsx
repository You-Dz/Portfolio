import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import useFormSubmit from "../useFormSubmit";
import { login } from "../../../api/auth";
import './LoginModal.scss'

function LoginModal({ isOpen, onClose, onSuccess }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [success, setSuccess] = useState("");

    const { submit, error } = useFormSubmit(login, (result) => {
        localStorage.setItem("token", result.token);
        setSuccess("Connexion réussi !");
        setForm({ email: '', password: '' }); // on vide le form si tu veux
        onSuccess();
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <FormModal
            isOpen={isOpen}
            onClose={onClose}
            title="Connexion"
            className="login-modal"
            onSubmit={() => submit(form)}
            error={error}
            submitLabel="Se connecter">

            {success && <p className="form-success">{success}</p>}

            <label className="form-label">
                E-mail
                <input className="form-input_text" type="email" name="email" value={form.email} onChange={handleChange} />
            </label>
            <label className="form-label">
                Mot de passe
                <input className="form-input_text" type="password" name="password" value={form.password} onChange={handleChange} />
            </label>
        </FormModal>
    );
}
export default LoginModal
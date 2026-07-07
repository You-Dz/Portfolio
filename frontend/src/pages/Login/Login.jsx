import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormSubmit from "../../components/Modal/useFormSubmit";
import { login } from "../../api/auth";
import './Login.scss';

function Login({ onLogin }) {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const { submit, error } = useFormSubmit(login, (result) => {
        localStorage.setItem("token", result.token);
        onLogin();
        navigate("/");
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <main className="login-page">
            <h1 className="page-title">Connexion</h1>
            <form className="login-form" onSubmit={(e) => { e.preventDefault(); submit(form); }}>
                <label className="form-label">
                    E-mail
                    <input className="form-input_text" type="email" name="email"
                        value={form.email} onChange={handleChange} />
                </label>
                <label className="form-label">
                    Mot de passe
                    <input className="form-input_text" type="password" name="password"
                        value={form.password} onChange={handleChange} />
                </label>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn-submit">Se connecter</button>
            </form>
        </main>
    );
}
export default Login;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import headerPortrait from '../../assets/images/Portrait_portfolio.webp';
import LoginModal from "../../components/Modal/LoginModal/LoginModal"

function Header({ isLoggedIn, onLogin, onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "À propos" },
        { to: "/projects", label: "Projets" },
        { to: "/skills", label: "Compétences" },
        { to: "/techwatch", label: "Veille technologique" },
    ];

    const handleAuthClick = () => {
        if (isLoggedIn) {
            localStorage.removeItem("token");
            onLogout();
        } else {
            setLoginOpen(true);
        }
    };

    return (
        <header className="header">
            {/* Bandeau admin : invisible par défaut, visible en mode admin */}
            <div className={isLoggedIn ? "header-admin-banner visible" : "header-admin-banner"}>
                Mode Administrateur
            </div>

            <div className="header-content">
                <div className="header-left">
                    <img className="header-portrait" src={headerPortrait} alt="Miniature portrait de Yoann" />
                    <span className="header-name">Yoann Doveze</span>

                    <button
                        className="header-auth"
                        onClick={handleAuthClick}
                        aria-label={isLoggedIn ? "Se déconnecter" : "Se connecter"}
                    >
                        {isLoggedIn ? "LogOut" : "LogIn"}
                    </button>
                </div>

                <div className=" header-right">
                    <nav className={menuOpen ? "header-nav open" : "header-nav"}>
                        {navLinks.map((link) =>
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                onClick={() => setMenuOpen(false)}>
                                {link.label}
                            </NavLink>
                        )}
                    </nav>

                    {/* Burger */}
                    <button
                        className="burger"
                        aria-label="Ouvrir le menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        ☰
                    </button>

                    <button className="cta-button">Contact</button>
                </div>
            </div>


            <LoginModal
                isOpen={loginOpen}
                onClose={() => setLoginOpen(false)}
                onSuccess={() => { onLogin(); setLoginOpen(false); }}
            />

        </header>
    );
}

export default Header;
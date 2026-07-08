import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import headerPortraitMini from '../../assets/images/home-portrait-mini.webp';


function Header({ isLoggedIn, onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);


    const navLinks = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "À propos" },
        { to: "/projects", label: "Projets" },
        { to: "/skills", label: "Compétences" },
        { to: "/techwatch", label: "Veille technologique" },
    ];

    const handleAuthClick = () => {
        localStorage.removeItem("token");
        onLogout();
    };

    return (
        <header className="header">

            <div className={isLoggedIn ? "header-admin-banner visible" : "header-admin-banner"}>
                Mode Administrateur
            </div>

            <div className="header-content">
                <div className="header-left">
                    <img className="header-portrait" src={headerPortraitMini} alt="Miniature portrait de Yoann" fetchPriority="high" />
                    <span className="header-name">Yoann Doveze</span>
                    {isLoggedIn && (
                        <button className="header-auth" onClick={handleAuthClick} aria-label="Se déconnecter">
                            LogOut
                        </button>
                    )}
                </div>

                <nav className={menuOpen ? "header-nav open" : "header-nav"}>
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to}
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-right">
                    <a href="mailto:ton-email@example.com" className="cta-button">
                        Contact
                    </a>
                    <button className="burger" aria-label="Ouvrir le menu" aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}>
                        ☰
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Header;
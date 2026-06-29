import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-content'>
                <div className="footer-socials">
                    <a className="socials-link" href="https://github.com/You-Dz" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Yoann — Tous droits réservés
                </p>
                <button className="footer-scrolltop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Retour en haut ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;
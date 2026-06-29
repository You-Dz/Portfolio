import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout({ isLoggedIn, onLogin, onLogout }) {
    return (
        <div className='layout'>
            <Header isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
            <main className='layout-content'>
                <Outlet context={{ isLoggedIn }} />
            </main>
            <Footer />
        </div>
    )
}
export default Layout
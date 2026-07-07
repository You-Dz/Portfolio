import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './layouts/Layout/Layout';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import TechWatch from './pages/TechWatch/TechWatch';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/techwatch' element={<TechWatch />} />
          <Route path="/manage-yd-portfolio" element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
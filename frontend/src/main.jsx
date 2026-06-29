// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal';
import '../src/styles/reset.css'
import '../src/styles/global.scss'
import App from './App.jsx'

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <App />
)
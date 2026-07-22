import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import './styles/index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

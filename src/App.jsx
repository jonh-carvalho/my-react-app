import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// App.jsx - Tudo em um componente
function App() {
  return (
    <div className="app">
      <h1>🌍 Lista de Países</h1>
      <div className="country-grid">

        <div className="country-card">
          <h3>🇧🇷 Brasil</h3>
          <p>Capital: Brasília</p>
        </div>

        <div className="country-card">
          <h3>🇦🇷 Argentina</h3>
          <p>Capital: Buenos Aires</p>
        </div>

        <div className="country-card">
          <h3>🇨🇱 Chile</h3>
          <p>Capital: Santiago</p>
        </div>

      </div>
      
    </div>
  );
}

export default App

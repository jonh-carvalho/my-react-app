import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import CountryGrid from './components/CountryGrid'

// App.jsx - Tudo em um componente
function App() {
  return (
    <div className="app">
      <Header />
      <CountryGrid />
    </div>
  );
}

export default App

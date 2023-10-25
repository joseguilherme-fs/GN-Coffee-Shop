import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';


function App() {
 return (
  <body class="bg-[#e7e4e4] text-gray-600 work-sans leading-normal text-base tracking-normal">
    <CartProvider>
      <div className="App">
        <Header />
        <Carrossel />
        <Produtos />
      </div>
    </CartProvider>
    <Contato />
    <Footer />
    </body>
    
  );
}

export default App;

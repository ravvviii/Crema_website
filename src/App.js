import React from 'react';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

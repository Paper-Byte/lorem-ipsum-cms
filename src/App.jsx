import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar.jsx';
import CreateClothing from './components/CreateClothingForm/CreateClothingBody';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <CreateClothing />
      <Footer position="bottom" />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation/Navbar.jsx';
import CreateClothing from './components/CreateClothingPage/CreateClothingBody';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import WelcomeBody from './components/WelcomePage/WelcomeBody';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Route path="/">
        <WelcomeBody />
      </Route>
      <Route path="/create-clothing">
        <CreateClothing />
      </Route>
      <Footer position="bottom" />
    </div>
  );
}

export default App;

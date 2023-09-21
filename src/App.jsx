import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation/Navbar.jsx';
import CreateClothing from './components/CreateClothingPage/CreateClothingBody';
import Footer from './components/Footer';
import WelcomeBody from './components/WelcomePage/WelcomeBody';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/welcome">
          <WelcomeBody />
        </Route>
        <Route eaxct path="/create-clothing">
          <CreateClothing />
        </Route>
      </Switch>
      <Footer position="bottom" />
    </div>
  );
}

export default App;

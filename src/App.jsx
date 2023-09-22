import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation/Navbar.jsx';
import CreateClothingBody from './components/CreateClothingPage/CreateClothingBody';
import Footer from './components/Footer';
import WelcomeBody from './components/WelcomePage/WelcomeBody';
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateNoveltyBody from './components/CreateNoveltyPage/CreateNoveltyBody';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/welcome" component={WelcomeBody} />
        <Route
          eaxct
          path="/create-clothing"
          component={CreateClothingBody}
        />
        <Route
          exact
          path="/create-novelty"
          component={CreateNoveltyBody}
        />
        <Redirect
          path="*"
          to="/welcome"
          component={<WelcomeBody />}
        />
      </Switch>
      <Footer position="bottom" />
    </div>
  );
}

export default App;

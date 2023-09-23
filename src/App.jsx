import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation/Navbar.jsx';
import CreateClothingBody from './components/CreateClothingPage/CreateClothingBody';
import Footer from './components/Footer';
import WelcomeBody from './components/WelcomePage/WelcomeBody';
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateNoveltyBody from './components/CreateNoveltyPage/CreateNoveltyBody';
import InventoryBody from './components/InventoryPage/InventoryBody';

function App() {
  const [userCatalogue, setUserCatalogue] = useState([]);

  useEffect(() => {
    const fetchUserCatalogue = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_CATALOGUE}`
        );
        const data = await response.json();
        setUserCatalogue(data);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchUserCatalogue();
  }, []);

  const updateCatalogueAfterDelete = (id) => {
    const newCatalogue = userCatalogue.filter((e) => {
      return e.id !== id;
    });
    setUserCatalogue(newCatalogue);
  };
  const updateCatalogueAfterPatch = (
    id,
    updatedItemKey,
    updatedValue
  ) => {
    const newCatalogue = userCatalogue.map((e) => {
      if (e.id === id) {
        e.updatedItemKey = updatedValue;
        return e;
      } else {
        return e;
      }
    });
  };

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
        <Route exact path="/your-inventory">
          <InventoryBody
            userCatalogue={userCatalogue}
            updateCatalogueAfterDelete={updateCatalogueAfterDelete}
            updateCatalogueAfterPatch={updateCatalogueAfterPatch}
          />
        </Route>
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

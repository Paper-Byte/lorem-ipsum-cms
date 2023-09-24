import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navigation/Navbar.jsx';
import CreateClothingBody from './components/CreateClothingPage/CreateClothingBody';
import FooterBody from './components/Footer/FooterBody';
import WelcomeBody from './components/WelcomePage/WelcomeBody';
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateNoveltyBody from './components/CreateNoveltyPage/CreateNoveltyBody';
import InventoryBody from './components/InventoryPage/InventoryBody';
import CataloguePreview from './components/CataloguePage/CatalogueBody';

function App() {
  const [userCatalogue, setUserCatalogue] = useState([]);

  //fetches user's catalogue on render, set up parent state for 'InventoryBody' and 'CataloguePreview'
  useEffect(() => {
    const fetchUserCatalogue = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_CATALOGUE}`
        );
        const data = await response.json();
        setUserCatalogue(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchUserCatalogue();
  }, []);

  return (
    <div className="flex flex-col" style={{ height: '100%' }}>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/welcome" component={WelcomeBody} />
        <Route eaxct path="/create-clothing">
          <CreateClothingBody setUserCatalogue={setUserCatalogue} />
        </Route>
        <Route exact path="/create-novelty">
          <CreateNoveltyBody setUserCatalogue={setUserCatalogue} />
        </Route>
        <Route exact path="/your-inventory">
          <InventoryBody
            userCatalogue={userCatalogue}
            setUserCatalogue={setUserCatalogue}
          />
        </Route>
        <Route exact path="/preview-catalogue">
          <CataloguePreview userCatalogue={userCatalogue} />
        </Route>
        <Redirect
          path="*"
          to="/welcome"
          component={<WelcomeBody />}
        />
      </Switch>
      <FooterBody position="bottom" />
    </div>
  );
}

export default App;

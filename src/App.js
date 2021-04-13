import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered');
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : setCurrentUser(null);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      {/* By putting Header component outside of the Switch, the Header is always present and rendered */}
      <Header currentUser={currentUser} />
      {/* Inside of a Switch component, even if multiple paths match the url, the only one page will be rendered*/}
      <Switch>
        {/* means exact={true} */}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndRegisterPage} />
      </Switch>
    </div>
  );
};

export default App;

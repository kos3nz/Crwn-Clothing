import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // console.log('useEffect triggered');
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth); // = null
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  // class component の setState({...}, () => {}) のように state を更新した後 cb を渡せないので useEffect を使用
  useEffect(() => {
    console.log('Fetched the user data');
    console.log(currentUser);
  }, [currentUser]);

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

import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
// import CheckoutPage from './pages/checkout/checkout.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Footer from './components/footer/footer.component.jsx';

// import './App.css';
import { GlobalStyle } from './global.styles';

// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from './firebase/firebase.utils';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

//## =============== Code Splitting =============== ##//

import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndRegisterPage = lazy(() =>
  import('./pages/sign-in-and-register/sign-in-and-register.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

//## =============== Component =============== ##//

const App = ({ currentUser, checkUserSession }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // useEffect(() => {
  // const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     // console.log(userRef);
  //     userRef.onSnapshot((snapShot) => {
  //       // console.log(snapShot.data());
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth); // = null
  //   }
  //   // addCollectionAndDocuments(
  //   //   'collections',
  //   //   collectionsArray.map((collection) => ({
  //   //     title: collection.title,
  //   //     items: collection.items,
  //   //   }))
  //   // );
  // });
  // return () => {
  //   unsubscribeFromAuth();
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // class component の setState({...}, () => {}) のように state を更新した後 cb を渡せないので useEffect を使用
  // useEffect(() => {
  //   console.log('Fetched the user data');
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <>
      <GlobalStyle />
      {/* By putting Header component outside of the Switch, the Header is always present and rendered */}
      <Header />
      {/* Inside of a Switch component, even if multiple paths match the url, the only one page will be rendered*/}
      <div className="contents">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              {/* means exact={true} */}
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndRegisterPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

//## =============== Redux =============== ##//

// Destructuring from root-reducer object
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// In case I need to pull in more in the future, I use createStructuredSelector()
// createStructuredSelector() automatically pass the top-level state into the selectors
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
// returned object が App component の props になる

//## =============== Export =============== ##//

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(null, mapDispatchToProps)(App);
// NOTE: connect() expects mapStateToProps as a first argument, and mapDispatchToProps as a second, App component doesn't need the first one so I can just pass null.

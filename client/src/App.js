import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { body } from 'express-validator';
import Body from './components/Body/index';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Body>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Landing} />
              <Route component={Routes} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    </Body>
  );
};

export default App;

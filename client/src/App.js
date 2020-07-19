import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Links from './pages/Links';
import Register from './pages/Register';
import Err404 from './pages/errors/404/404';
import Err500 from './pages/errors/500/500';
import Err401 from './pages/errors/401/401';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />

          <Body>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/appointment' component={Appointment} />
            <Route exact path='/links' component={Links} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/err500' component={Err500} />
            <Route exact path='/err404' component={Err404} />
            <Route exact path='/err401' component={Err401} />
          </Body>

          <Footer />
        </>
      </Router>
    );
  }
}

export default App;

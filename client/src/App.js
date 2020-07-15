import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Links from "./pages/Links";


class App extends Component {

  render() {
    return (

      <Router>
        <>
          <Navbar />

          <Body>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path="/links" component={Links} />
          </Body>

          <Footer />
        </>
      </Router >

    );
  };
};

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
//import Home from './components/pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Appointment from '../pages/Appointment';
import Links from '../pages/Links';
//import Register from './pages/Register';
import Err404 from '../pages/errors/404/404';
import Err500 from '../pages/errors/500/500';
import Err401 from '../pages/errors/401/401';
//import Navbar from './components/Navbar';
//import Body from './components/Body';

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/appointment' component={Appointment} />
        <Route exact path='/links' component={Links} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/err500' component={Err500} />
        <Route exact path='/err404' component={Err404} />
        <Route exact path='/err401' component={Err401} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={ProfileForm} />
        <PrivateRoute exact path='/edit-profile' component={ProfileForm} />
        {/* <PrivateRoute exact path='/bookings' component={Bookings} />
        <PrivateRoute exact path='/bookings/:id' component={Booking} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

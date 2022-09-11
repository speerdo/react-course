import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={(props) => <Home {...props} />} exact={true} />
      <Route
        path='/portfolio/:id'
        component={(props) => <PortfolioItem {...props} />}
      />
      <Route
        path='/portfolio'
        component={(props) => <Portfolio {...props} />}
        exact={true}
      />
      <Route path='/contact' component={(props) => <Contact {...props} />} />
      <Route component={(props) => <NotFoundPage {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

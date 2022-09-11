import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route
        path='/'
        component={(props) => <ExpenseDashboardPage {...props} />}
        exact={true}
      />
      <Route
        path='/create'
        component={(props) => <AddExpensePage {...props} />}
        exact={true}
      />
      <Route
        path='/edit/:id'
        component={(props) => <EditExpensePage {...props} />}
        exact={true}
      />
      <Route
        path='/help'
        component={(props) => <HelpPage {...props} />}
        exact={true}
      />
      <Route component={(props) => <NotFoundPage {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

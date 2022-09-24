import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

// addExpense -> water bill
const expenseOne = store.dispatch(
  addExpense({ description: 'Water Bill', amount: 4500 })
);

// addExpense -> gas bill
const expenseTwo = store.dispatch(
  addExpense({ description: 'Gas Bill', createdAt: 1000 })
);

// addExpense -> water bill
const expenseThree = store.dispatch(
  addExpense({ description: 'Rent', amount: 109500 })
);

// getVisibleExpensees -> print visible ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

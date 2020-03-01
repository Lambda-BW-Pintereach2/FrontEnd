import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route
        exact path="/"
        component={Dashboard}
      /> */}
      <Route
        path="/add"
        component={Add}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/signup"
        component={Signup}
      />
      <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
    </div>
  );
}

export default App;

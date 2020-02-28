import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Logout from './components/Logout';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact path="/"
        component={Home}
      />
      <Route 
        path="/add"
        component={Add}
      />
      <Route
        path="/logout"
        component={Logout}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Header />
      <Route 
        path="/add" 
        component={Add}
      />
      <Route 
      path="/dashboard" 
      component={Dashboard}
      />
    </div>
  );
}

export default App;

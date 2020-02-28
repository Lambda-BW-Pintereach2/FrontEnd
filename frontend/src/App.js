import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo</h1>
        <h3>My Branch Carlos</h3>
        <Header />
        <Switch>
          <Route exact='/' render={() => <Redirect to='/login' />} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

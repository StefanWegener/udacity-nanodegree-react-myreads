import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';

import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <div>
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/search" component={SearchScreen} />
    </div>
  );
}

export default App;

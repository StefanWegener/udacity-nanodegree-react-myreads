import React, { Component } from "react";

import "./App.css";

import {Route} from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MainScreen}/>
        <Route exact path="/search" component={SearchScreen}/>
      </div>
    );
  }
}

export default App;

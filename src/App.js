import React from "react";
import "./App.css";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

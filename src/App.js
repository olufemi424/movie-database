import React from "react";
import "./App.css";
import MoviesList from "./MoviesList";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => <h1>{match.params.id}</h1>;

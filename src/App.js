import React from "react";
import "./css/App.css";
import MovieDB from "./components/MovieDB";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MovieDB} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

import React from "react";
import "./css/App.css";
import MovieDb from "./components/MovieDb";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MovieDb} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

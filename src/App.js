import React from "react";
import MovieDb from "./components/MovieDb";
import MovieDetails from "./components/movieComponents/MovieDetails";
import MoviesSearchResult from "./components/movieComponents/MoviesSearchResult";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MovieDb} />
        <Route path="/search" component={MoviesSearchResult} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/tv/:id" component={MovieDetails} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import MoviesSearchResult from "./components/movieComponents/MoviesSearchResult";
import MovieDb from "./components/MovieDb";
import MovieDetails from "./components/movieComponents/MovieDetails";
import NowTrending from "./components/movieCategories/NowTrending";
import Footer from "./components/layouts/Footer";

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={MovieDb} />
        <Route path="/search" component={MoviesSearchResult} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/tv/:id" component={MovieDetails} />
        <Route path="/nowtrending" component={NowTrending} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

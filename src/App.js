import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import MoviesSearchResult from "./components/movieComponents/MoviesSearchResult";
import MovieDb from "./components/MovieDb";
import MovieDetails from "./components/movieComponents/MovieDetails";
import NowTrending from "./components/movieCategories/NowTrending";
import NowPlaying from "./components/movieCategories/NowPlaying";
import Popular from "./components/movieCategories/Popular";
import TvShows from "./components/movieCategories/TvShows";
import TopRatedShows from "./components/movieCategories/TopRatedShows";
import Footer from "./components/layouts/Footer";

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={MovieDb} />
        <Route path="/search/:keyword" component={MoviesSearchResult} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/tv/:id" component={MovieDetails} />
        <Route path="/nowtrending" component={NowTrending} />
        <Route path="/nowplaying" component={NowPlaying} />
        <Route path="/popular" component={Popular} />
        <Route path="/shows" component={TvShows} />
        <Route path="/topshows" component={TopRatedShows} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

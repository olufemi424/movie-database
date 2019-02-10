import React, { Component } from "react";

import MovieResult from "../movieComponents/MovieList";

class NowTrending extends Component {
  componentDidMount() {
    this.props.getTrendingMovies("GET_TRENDING_MOVIES");
  }
  render() {
    return (
      <MovieResult
        path="movie"
        category="Now Trending"
        movies={this.props.movies}
      />
    );
  }
}

export default NowTrending;

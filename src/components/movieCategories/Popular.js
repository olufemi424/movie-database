import React, { Component } from "react";

import MovieResult from "../movieComponents/MovieList";

class Popular extends Component {
  componentDidMount() {
    this.props.getPopularMovies("GET_POPULAR_MOVIES");
  }
  render() {
    return (
      <MovieResult path="movie" category="Popular" movies={this.props.movies} />
    );
  }
}

export default Popular;

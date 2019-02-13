import React, { Component } from "react";

import MovieResult from "../movieComponents/MovieList";

class TopRatedShows extends Component {
  componentDidMount() {
    this.props.getTopRatedSeries("GET_TOP_RATED_SERIES");
  }
  render() {
    return (
      <MovieResult
        path="tv"
        category="Top Rated Shows"
        movies={this.props.movies}
      />
    );
  }
}

export default TopRatedShows;

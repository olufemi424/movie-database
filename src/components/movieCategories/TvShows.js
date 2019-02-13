import React, { Component } from "react";

import MovieResult from "../movieComponents/MovieList";

class TvShows extends Component {
  componentDidMount() {
    this.props.getMovieSeries("GET_POPULAR_SERIES");
  }
  render() {
    return (
      <MovieResult path="tv" category="Shows" movies={this.props.movies} />
    );
  }
}

export default TvShows;

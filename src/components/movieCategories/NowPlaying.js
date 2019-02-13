import React, { Component } from "react";

import MovieList from "../movieComponents/MovieList";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.getMovies("GET_MOVIES");
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Now Playing"
        movies={this.props.movies}
      />
    );
  }
}

export default NowPlaying;

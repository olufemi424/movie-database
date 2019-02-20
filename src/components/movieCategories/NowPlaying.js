import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Now Playing"
        link="nowplaying"
        movies={this.props.movies.results}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(NowPlaying);

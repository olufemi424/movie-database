import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.fetchMovie("GET_MOVIES");
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Now Playing"
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
  { fetchMovie }
)(NowPlaying);

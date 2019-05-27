import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { movies } = this.props;

    return (
      <div>
        <MovieGrid movies={movies} component="Now Playing" path="movie" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);

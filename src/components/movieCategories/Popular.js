import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieActions";

import MovieResult from "../movieComponents/MovieList";

class Popular extends Component {
  componentDidMount() {
    this.props.fetchMovie("GET_POPULAR_MOVIES");
  }
  render() {
    return (
      <MovieResult
        path="movie"
        category="Popular"
        movies={this.props.movies.results}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.popularMovies
});

export default connect(
  mapStateToProps,
  { fetchMovie }
)(Popular);

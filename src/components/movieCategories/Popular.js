import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularMovies } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class Popular extends Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Popular"
        link="popular"
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
  { getPopularMovies }
)(Popular);

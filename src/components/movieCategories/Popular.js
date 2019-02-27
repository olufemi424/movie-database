import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class Popular extends Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieGrid movies={movies} component="Popular" path="movie" />
      </div>
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

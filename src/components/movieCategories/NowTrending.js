import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class NowTrending extends Component {
  componentDidMount() {
    this.props.getTrendingMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieGrid movies={movies} component="Now Trending" path="movie" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.trendingMovies
});

export default connect(
  mapStateToProps,
  { getTrendingMovies }
)(NowTrending);

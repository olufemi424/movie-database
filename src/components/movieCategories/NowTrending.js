import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrendingMovies } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class NowTrending extends Component {
  componentDidMount() {
    this.props.getTrendingMovies();
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Now Trending"
        link="nowtrending"
        movies={this.props.movies.results}
      />
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

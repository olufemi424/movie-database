import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class NowTrending extends Component {
  componentDidMount() {
    this.props.fetchMovie("GET_TRENDING_MOVIES");
  }
  render() {
    return (
      <MovieList
        path="movie"
        category="Now Trending"
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
  { fetchMovie }
)(NowTrending);

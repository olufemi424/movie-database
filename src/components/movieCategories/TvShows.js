import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class TvShows extends Component {
  componentDidMount() {
    this.props.fetchMovie("GET_POPULAR_SERIES");
  }
  render() {
    const { results } = this.props.movies;
    return (
      <MovieList path="tv" link="shows" category="Shows" movies={results} />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.popularSeries
});

export default connect(
  mapStateToProps,
  { fetchMovie }
)(TvShows);

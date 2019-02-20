import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularTvShows } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class TvShows extends Component {
  componentDidMount() {
    this.props.getPopularTvShows();
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
  { getPopularTvShows }
)(TvShows);

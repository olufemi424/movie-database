import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRatedTvShows } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class TopRatedShows extends Component {
  componentDidMount() {
    this.props.getTopRatedTvShows();
  }
  render() {
    return (
      <MovieList
        path="tv"
        category="Top Rated Shows"
        link="topshows"
        movies={this.props.movies.results}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.topRatedSeries
});

export default connect(
  mapStateToProps,
  { getTopRatedTvShows }
)(TopRatedShows);

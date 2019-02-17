import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieActions";

import MovieList from "../movieComponents/MovieList";

class TopRatedShows extends Component {
  componentDidMount() {
    this.props.fetchMovie("GET_TOP_RATED_SERIES");
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
  { fetchMovie }
)(TopRatedShows);

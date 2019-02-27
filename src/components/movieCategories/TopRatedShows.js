import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopRatedTvShows } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class TopRatedShows extends Component {
  componentDidMount() {
    this.props.getTopRatedTvShows();
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieGrid movies={movies} component="Top Rated Shows" path="tv" />
      </div>
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

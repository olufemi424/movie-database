import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularTvShows } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class TvShows extends Component {
  componentDidMount() {
    this.props.getPopularTvShows();
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieGrid movies={movies} component="Shows" />
      </div>
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

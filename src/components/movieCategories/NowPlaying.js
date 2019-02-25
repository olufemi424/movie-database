import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";
import Spinner from "../layouts/Spinner";

class NowPlaying extends Component {
  state = {
    movie: ""
  };
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { movies } = this.props;
    let result;
    if (movies) {
      result = movies;
    } else {
      result = <Spinner />;
    }
    return (
      <div>
        <MovieGrid movies={result} component="Now Playing" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(NowPlaying);

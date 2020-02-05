import React, { Component } from "react";
import { connect } from "react-redux";
import { discoverMoviesAction } from "../../store/actions/movieActions";

import MovieGrid from "../movieComponents/MovieGrid";

class NowPlaying extends Component {
  componentDidMount() {
    this.props.discoverMoviesAction();
  }
  render() {
    const { discoverMovies } = this.props;

    return (
      <div>
        <MovieGrid
          movies={discoverMovies}
          component="Now Playing"
          path="movie"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discoverMovies: state.movies.discoverMovies
});

const mapDispatchToProps = {
  discoverMoviesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);

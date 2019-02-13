import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../store/actions/movieActions";
// import Carousel from "./movieComponents/Carousel";

import NowPlaying from "./movieCategories/NowPlaying";
import NowTrending from "./movieCategories/NowTrending";
import Popular from "./movieCategories/Popular";
import TvShows from "./movieCategories/TvShows";
import TopRatedShows from "./movieCategories/TopRatedShows";

class MovieDb extends Component {
  state = { page: this.props.movies.movies.page };

  render() {
    const {
      movies,
      trendingMovies,
      popularMovies,
      popularSeries,
      topRatedSeries
    } = this.props.movies;
    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="container" />
        <div className="category">
          <NowPlaying
            getMovies={this.props.fetchMovie}
            movies={movies.results}
          />
          <NowTrending
            getTrendingMovies={this.props.fetchMovie}
            movies={trendingMovies.results}
          />
          <Popular
            getPopularMovies={this.props.fetchMovie}
            movies={popularMovies.results}
          />

          <TvShows
            getMovieSeries={this.props.fetchMovie}
            movies={popularSeries.results}
          />
          <TopRatedShows
            getTopRatedSeries={this.props.fetchMovie}
            movies={topRatedSeries.results}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: type => dispatch(fetchMovie(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

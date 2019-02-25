import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./movieComponents/MovieList";

import {
  getPopularTvShows,
  fetchMovies,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedTvShows
} from "../store/actions/movieActions";

// import Carousel from "./movieComponents/Carousel";

class MovieDb extends Component {
  componentDidMount() {
    this.props.getPopularTvShows();
    this.props.fetchMovies();
    this.props.getTrendingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedTvShows();
  }

  render() {
    const {
      movies,
      popularMovies,
      trendingMovies,
      popularSeries,
      topRatedSeries
    } = this.props;

    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="categories">
          <MovieList
            path="movie"
            category="Now Playing"
            link="nowplaying"
            movies={movies.results}
          />
          <MovieList
            path="movie"
            category="Now Trending"
            link="nowtrending"
            movies={trendingMovies.results}
          />
          <MovieList
            path="movie"
            category="Popular"
            link="popular"
            movies={popularMovies.results}
          />
          <MovieList
            path="tv"
            link="shows"
            category="Shows"
            movies={popularSeries.results}
          />
          <MovieList
            path="tv"
            category="Top Rated Shows"
            link="topshows"
            movies={topRatedSeries.results}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  popularMovies: state.movies.popularMovies,
  trendingMovies: state.movies.trendingMovies,
  popularSeries: state.movies.popularSeries,
  topRatedSeries: state.movies.topRatedSeries
});

const mapDispatchToProps = {
  getPopularTvShows,
  fetchMovies,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedTvShows
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

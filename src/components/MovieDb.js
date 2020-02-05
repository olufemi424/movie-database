import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./movieComponents/MovieList";

import {
  getPopularTvShows,
  discoverMoviesAction,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedTvShows,
  getRecommendationMovies
} from "../store/actions/movieActions";

// import Carousel from "./movieComponents/Carousel";

class MovieDb extends Component {
  componentDidMount() {
    this.props.getPopularTvShows();
    this.props.discoverMoviesAction();
    this.props.getTrendingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedTvShows();
    this.props.getRecommendationMovies();
  }

  render() {
    const {
      discoverMovies,
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
            movies={discoverMovies.results}
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
  discoverMovies: state.movies.discoverMovies,
  popularMovies: state.movies.popularMovies,
  trendingMovies: state.movies.trendingMovies,
  popularSeries: state.movies.popularSeries,
  topRatedSeries: state.movies.topRatedSeries
});

const mapDispatchToProps = {
  getPopularTvShows,
  discoverMoviesAction,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedTvShows,
  getRecommendationMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

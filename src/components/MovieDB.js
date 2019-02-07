import React, { Component } from "react";
import Search from "./Search";
import MovieResult from "./MovieList";
// import { NextButton, PrevButton } from "./movieActionsButton/NextButton";
import { connect } from "react-redux";
import {
  getMovies,
  getTrendingMovies,
  getPopularMovies
} from "../store/actions/movieActions";
// import Carousel from "./Carousel";

class MovieDb extends Component {
  state = { page: this.props.movies.movies.page };

  componentDidMount = () => {
    this.props.getMovies();
    this.props.getTrendingMovies();
    this.props.getPopularMovies();
  };

  // handleNextClick = () => {
  //   let cur = this.props.movies.movies.page;
  //   let nextpage = cur + 1;
  //   this.setState({ page: nextpage });
  //   this.props.getMovies(nextpage);
  // };

  // handlePrevClick = () => {
  //   let cur = this.props.movies.movies.page;
  //   let nextpage = cur - 1;
  //   this.setState({ page: nextpage });
  //   this.props.getMovies(nextpage);
  // };

  render() {
    const { movies, trendingMovies, popularMovies } = this.props.movies;
    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="container">
          <Search movieSearch={this.movieSearch} />
        </div>
        <div className="category">
          <MovieResult category="Now Playing" movies={movies.results} />
          <MovieResult
            category="Now Trending"
            movies={trendingMovies.results}
          />
          <MovieResult category="Popular" movies={popularMovies.results} />
        </div>

        {/* {this.state.page > 1 && <PrevButton onClick={this.handlePrevClick} />}
          <NextButton onClick={this.handleNextClick} /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: page => dispatch(getMovies(page)),
    getTrendingMovies: () => dispatch(getTrendingMovies()),
    getPopularMovies: page => dispatch(getPopularMovies(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

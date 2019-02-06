import React, { Component } from "react";
import Search from "./Search";
import SearchResult from "./MovieList";
// import { NextButton, PrevButton } from "./movieActionsButton/NextButton";
import { connect } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
// import Carousel from "./Carousel";

class MovieDb extends Component {
  state = { page: this.props.movies.movies.page };

  componentDidMount = () => {
    this.props.getMovies();
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
    const { movies } = this.props.movies;
    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="container">
          <Search movieSearch={this.movieSearch} />
        </div>
        <SearchResult movies={movies.results} />
        {/* {this.state.page > 1 && <PrevButton onClick={this.handlePrevClick} />}
          <NextButton onClick={this.handleNextClick} /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  page: state.page
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: page => dispatch(getMovies(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

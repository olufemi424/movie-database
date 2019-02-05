import React, { Component } from "react";
import Search from "./Search";
import SearchResult from "./MovieList";
import { connect } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
// import Carousel from "./Carousel";

class MovieDb extends Component {
  componentDidMount = () => {
    this.props.getMovies();
  };

  render() {
    const { movies } = this.props.movies;
    return (
      <React.Fragment>
        {/* <Carousel movies={movies} /> */}
        <div className="container">
          <Search movieSearch={this.movieSearch} />
          <SearchResult movies={movies.results} />
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
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDb);

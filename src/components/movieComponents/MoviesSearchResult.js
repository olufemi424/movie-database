import React, { Component } from "react";
import { connect } from "react-redux";
import MovieGrid from "./MovieGrid";
import { movieSearch } from "../../store/actions/movieActions";

//TODO: SEARCH REASULTS HAVE THEIR OWN STORE STATE
class MovieResult extends Component {
  componentDidMount = () => {
    this.props.movieSearch(this.props.match.params.keyword);
  };

  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieGrid movies={movies} component="Search Results" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movieSearchResult
});

const mapDispatchToProps = {
  movieSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieResult);

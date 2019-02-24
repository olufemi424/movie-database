import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

//TODO: SEARCH REASULTS HAVE THEIR OWN STORE STATE
class MovieResult extends Component {
  render() {
    const { results } = this.props.movies;
    let movieResults;
    if (results) {
      movieResults = results.map(movie => {
        return (
          <div key={movie.id} className="search__item">
            <Movie movie={movie} path={movie.media_type} />
          </div>
        );
      });
    } else {
      movieResults = (
        <div className="search__notfound">
          No Movie Found <span>{"👻"}</span>
        </div>
      );
    }

    return (
      <div className="search">
        <h2 className="search__heading">Search Results</h2>
        <div className="search__box">{movieResults}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movieSearchResult
});

export default connect(mapStateToProps)(MovieResult);

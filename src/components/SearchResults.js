import React, { Component } from "react";
import Movie from "./Movie";

class MoviesResult extends Component {
  render() {
    let movieResults;
    if (this.props.movies) {
      movieResults = this.props.movies.map(movie => {
        return <Movie movie={movie} key={movie.id} />;
      });
    }
    return (
      <div className="row mt-4">
        <div>{movieResults}</div>
      </div>
    );
  }
}

export default MoviesResult;

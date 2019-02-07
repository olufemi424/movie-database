import React, { Component } from "react";
import Movie from "./Movie";

class MovieResult extends Component {
  render() {
    let movieResults;
    if (this.props.movies) {
      movieResults = this.props.movies.map(movie => {
        return (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        );
      });
    } else {
      return <div className="text-light py-5">No Movie Found</div>;
    }
    return <div>{movieResults}</div>;
  }
}

export default MovieResult;

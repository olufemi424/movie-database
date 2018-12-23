import React, { Component } from "react";
import Movie from "./Movie";

class SearchResults extends Component {
  render() {
    let movieResults = this.props.movies;
    if (this.props.movies) {
      movieResults = this.props.movies.map(movie => {
        return (
          <div key={movie.id} className="col-sm-3">
            <Movie movie={movie} />
          </div>
        );
      });
    }
    return <div className="row mt-4">{movieResults}</div>;
  }
}

export default SearchResults;

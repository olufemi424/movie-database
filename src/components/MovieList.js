import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  render() {
    let movieResults;
    const { movies, category } = this.props;
    if (movies) {
      movieResults = movies.map(movie => {
        return (
          <div key={movie.id} className="col-lg-2 col-md-3 col-sm-6">
            <Movie movie={movie} />
          </div>
        );
      });
    } else {
      return <div className="text-light py-5">No Movie Found</div>;
    }
    return (
      <React.Fragment>
        <div className="category__title">
          <h2>{category}</h2>
        </div>
        <div className="category__card">
          <div className="card__outer">{movieResults}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;

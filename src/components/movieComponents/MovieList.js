import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import Spinner from "../layouts/Spinner";

class MovieList extends Component {
  render() {
    let movieResults;
    const { movies, category, path, link } = this.props;
    if (movies) {
      movieResults = movies.map(movie => {
        return (
          <div key={movie.id} className="col-md-3 col-lg-2">
            <Movie movie={movie} path={path} />
          </div>
        );
      });
    } else {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <div className="category__title">
          <Link to={link ? link : "/"}>
            <h2>{category}</h2>
          </Link>
        </div>
        <div className="category__card text-center">
          <div className="card__outer">{movieResults}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;

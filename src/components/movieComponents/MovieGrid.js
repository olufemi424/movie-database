import React, { Component } from "react";
import Movie from "../movieComponents/Movie";

export class MovieGrid extends Component {
  render() {
    const { results } = this.props.movies;
    let movieResults;
    if (results) {
      movieResults = results.map(movie => {
        return (
          <div key={movie.id} className="flex__item">
            <Movie movie={movie} path={movie.media_type} />
            <h6 className="flex__item-title">
              {movie.title
                ? movie.title.substring(0, 20)
                : movie.name.substring(0, 20)}{" "}
            </h6>
          </div>
        );
      });
    }

    return (
      <div className="flex">
        <h2 className="flex__heading">{this.props.component}</h2>
        <div className="flex__box">{movieResults}</div>
      </div>
    );
  }
}

export default MovieGrid;

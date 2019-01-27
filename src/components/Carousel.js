import React, { Component } from "react";

export class Carousel extends Component {
  render() {
    const carousel = this.props.movies.map(movie => {
      return movie.backdrop_path ? (
        <div className="carousel-item card text-white" key={movie.title}>
          <img
            className="d-block w-100 card-img"
            src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt="Second slide"
          />
          <div className="card-img-overlay">
            <h1 className="card-title">{movie.title}</h1>
          </div>
        </div>
      ) : (
        <div>No backdrop</div>
      );
    });
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="http://image.tmdb.org/t/p/w1280/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg"
              alt="First slide"
            />
          </div>
          {carousel}
        </div>
      </div>
    );
  }
}

export default Carousel;

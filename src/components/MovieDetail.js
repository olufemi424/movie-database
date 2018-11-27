import React, { Component } from "react";

const POSTER_PATH = "https://image.tmdb.org/t/p/w200";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    // try to fetch data
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US`
      );

      const movie = await res.json();
      //set state to the reseult object
      this.setState({
        movie: movie
      });

      //catch the error
    } catch (e) {}
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="Poater" />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="Poater" />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;

import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../../store/actions/movieActions";
import Overdrive from "react-overdrive";
import StarRatings from "react-star-ratings";
import errorPosterPath from "../../img/posterpath.png";
import Spinner from "../layouts/Spinner";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetails extends Component {
  componentDidMount() {
    const { url } = this.props.movieIdPath;
    //call action
    this.props.getMovieDetails(url);
  }

  //GET RUN TIME
  getRuntime = () => {
    const { runtime } = this.props.movieDetails;
    if (runtime) {
      const minutes = runtime % 60;
      const hour = (runtime - minutes) / 60;
      return (
        <span>
          {hour}hr {minutes}mins
        </span>
      );
    }
  };

  render() {
    const { movieDetails } = this.props;

    const { genres } = movieDetails;
    let movieGen;
    if (genres) {
      movieGen = Object.entries(genres).map(genre =>
        genre.map((gen, i) => (
          <span className="badge badge-light mr-2" key={i}>
            {gen.name}
          </span>
        ))
      );
    }

    if (movieDetails === undefined || Object.keys(movieDetails).length === 0) {
      return <Spinner />;
    } else {
      return (
        <div
          className="movie__details"
          style={{
            backgroundImage: `url(${
              movieDetails.backdrop_path
                ? BACKDROP_PATH + movieDetails.poster_path
                : errorPosterPath
            })`
          }}
        >
          <div className="movie__details--info">
            <Overdrive id={`${movieDetails.id}`}>
              <img
                className="movie__details-poster"
                src={
                  movieDetails.poster_path
                    ? POSTER_PATH + movieDetails.poster_path
                    : errorPosterPath
                }
                alt="Poster"
              />
            </Overdrive>
            <div className="info movie__details--box">
              <h2 className="movie__details--info-title">
                {movieDetails.title ? movieDetails.title : movieDetails.name}{" "}
                <span className="movie__details--runtime">
                  <i className="far fa-clock" />{" "}
                  {movieDetails.runtime
                    ? this.getRuntime()
                    : `${movieDetails.number_of_seasons} Seasons ${
                        movieDetails.number_of_episodes
                      } Episodes`}
                </span>
              </h2>
              <StarRatings
                rating={
                  movieDetails.vote_average ? movieDetails.vote_average / 2 : 5
                }
                starRatedColor="#FF982C"
                numberOfStars={5}
                starDimension="25px"
                starSpacing="3px"
                name="rating"
              />
              <h3 className="mt-4 movie__details--info-date">
                <span className="mr-3">
                  {" "}
                  {movieDetails.release_date
                    ? movieDetails.release_date
                    : movieDetails.first_air_date}
                </span>
                <span>{movieGen}</span>
              </h3>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieDetails: state.movies.movie,
    movieIdPath: ownProps.match
  };
};

const mapDispatchToProps = {
  getMovieDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);

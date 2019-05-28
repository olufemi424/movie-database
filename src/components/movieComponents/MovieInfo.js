import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovieDetails,
  getRecommendationMovies
} from "../../store/actions/movieActions";
import StarRatings from "react-star-ratings";
import defaultBackdrop from "../../img/backdrop.png";
import Spinner from "../layouts/Spinner";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieInfo extends Component {
  componentDidMount() {
    const { url } = this.props.movieIdPath;
    //call action
    if (url) {
      this.props.getMovieDetails(url);
      this.props.getRecommendationMovies(url);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id) {
      if (this.props.match.params.id !== prevProps.match.params.id) {
        const { url } = this.props.movieIdPath;
        //call action
        this.props.getMovieDetails(url);
        this.props.getRecommendationMovies(url);
      }
    }
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

    let movieGen;
    if (movieDetails) {
      const { genres } = movieDetails;
      if (genres) {
        movieGen = Object.keys(genres).map((genre, i) => {
          return (
            <span className="movie__details--info--badge" key={i}>
              {genres[genre].name}
            </span>
          );
        });
      }
    }

    if (movieDetails === undefined || Object.keys(movieDetails).length === 0) {
      return <Spinner />;
    } else {
      return (
        <div className="movie__details">
          <div className="movie__details--container">
            <div className="movie__details--info">
              <img
                className="movie__details-poster"
                src={
                  movieDetails.poster_path
                    ? BACKDROP_PATH + movieDetails.poster_path
                    : defaultBackdrop
                }
                alt="Poster"
              />
              <div className="movie__details--box">
                <h2 className="movie__details--info-title">
                  {movieDetails.title ? movieDetails.title : movieDetails.name}{" "}
                </h2>
                <h5 className="movie__details--runtime">
                  <i className="far fa-clock" />{" "}
                  {movieDetails.runtime
                    ? this.getRuntime()
                    : `${movieDetails.number_of_seasons} Seasons ${
                        movieDetails.number_of_episodes
                      } Episodes`}
                  <span className="movie__details--star-ratings">
                    <StarRatings
                      rating={
                        movieDetails.vote_average
                          ? movieDetails.vote_average / 2
                          : 5
                      }
                      starRatedColor="#FF982C"
                      numberOfStars={5}
                      starDimension="25px"
                      starSpacing="3px"
                      name="rating"
                    />
                  </span>
                </h5>

                <h5 className="movie__details--info-date">
                  {" "}
                  {movieDetails.release_date
                    ? movieDetails.release_date
                    : movieDetails.first_air_date}
                </h5>
                <p className="movie__details--genre">{movieGen}</p>
                <p className="movie__details--des">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  movieDetails: state.movies.movie,
  movieIdPath: ownProps.match,
  recommendations: state.movies.recommendations
});

const mapDispatchToProps = {
  getMovieDetails,
  getRecommendationMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieInfo);

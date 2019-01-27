import React, { Component } from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import StarRatings from "react-star-ratings";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
    // activeovie: {}
  };

  componentWillMount = async () => {
    const id = this.props.match.params.id;
    // fetch data
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie: movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt="Poster" />
          </Overdrive>
          <div className="info">
            <h2 className="mb-3">{movie.title}</h2>
            <StarRatings
              rating={movie.vote_average}
              starRatedColor="#FF982C"
              numberOfStars={10}
              starDimension="25px"
              starSpacing="3px"
              name="rating"
            />
            <h3 className="mt-4">{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  grid-template-columns: repeat(2, 2fr);

  > .info {
    margin-left: 30px;
  }

  .ratingContainer {
    display: inline-block;
  }
  .rating {
    background-color: #ff982c;
    padding: 10px;
    border-radius: 50%;
  }

  img {
    position: relative;
    top: -6rem;
  }

  .rating {
    width: ;
  }
`;

import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import Search from "./Search";

class MoviesList extends Component {
  state = {
    movies: []
  };
  async componentDidMount() {
    // try to fetch data
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      //set state to the reseult object
      this.setState({
        movies: movies.results
      });
      //catch the error
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Search />
        <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </MovieGrid>
      </React.Fragment>
    );
  }
}

export default MoviesList;

export const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

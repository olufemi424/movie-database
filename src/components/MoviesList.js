import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import Search from "./Search";

const baseURL = "https://api.themoviedb.org/3/";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.movieSearch = this.movieSearch.bind(this);
  }

  state = {
    movies: []
  };

  async componentDidMount() {
    // try to fetch data
    try {
      const res = await fetch(
        `${baseURL}movie/now_playing?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US&page=1`
      );
      const movies = await res.json();
      //set state to the reseult object
      this.setState({
        keyword: "",
        movies: movies.results
      });
      //catch the error
    } catch (error) {
      console.log(error);
    }
  }

  updateInputValue = val => {
    this.setState({
      keyword: val
    });
  };

  movieSearch = e => {
    let url = "".concat(
      baseURL,
      "search/movie?api_key=",
      "56cbdfc579474a601e5ee545721a625f&language=en-US",
      "&query=",
      this.state.keyword
    );
    // try to fetch data
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Search
          movieSearch={this.movieSearch}
          updateInputValue={this.updateInputValue}
        />
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
  padding-top: 0.3rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
  // overflow: hidden;
`;

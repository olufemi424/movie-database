import React, { Component } from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieDetail";
import styled from "styled-components";

class Search extends Component {
  constructor() {
    super();
    // this.state = {
    //   search: "Jaw"
    // };
  }
  // state = {
  //   movies: []
  // };
  // async componentDidMount() {
  //   // try to fetch data
  //   try {
  //     const res = await fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  //     );
  //     const movies = await res.json();
  //     //set state to the reseult object
  //     this.setState({
  //       movies: movies.results
  //     });
  //     //catch the error
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    return (
      <SearchStyle>
        <section className="section">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Enter Movie Name.."
            />
            <button className="button is-info">Search</button>
          </form>
        </section>
        {/* <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </MovieGrid> */}
      </SearchStyle>
    );
  }
}

export default Search;

export const SearchStyle = styled.div`
  input {
    font-size: 16px;
    padding: 10px;
    margin-top: 15px;
    outline: none;
  }
  button {
    font-size: 16px;
    padding: 12px;
    margin-left: 10px;
    background-color: #222;
    color: #f4f4f4;
    outline: none;
  }
`;

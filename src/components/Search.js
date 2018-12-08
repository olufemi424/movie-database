import React, { Component } from "react";
import Movie from "./Movie";
import MovieGrid from "./MovieDetail";
import styled from "styled-components";

const baseURL = "https://api.themoviedb.org/3/";

class Search extends Component {
  state = {
    keyword: "",
    movie: ""
  };

  updateInputValue = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  searchMovie = (e, movie) => {
    e.preventDefault();
    // console.log(this.state.keyword);
    this.runSearch();
  };

  runSearch = state => {
    let url = "".concat(
      baseURL,
      "search/movie?api_key=",
      "56cbdfc579474a601e5ee545721a625f&language=en-US",
      "&query=",
      this.state.keyword
    );
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          movie: data.results[0].title
        });
      });
  };

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
              value={this.state.keyword}
              onChange={this.updateInputValue}
            />
            <button onClick={this.searchMovie} className="button is-info">
              Search
            </button>
          </form>
        </section>
        <div>{this.state.movie}</div>
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

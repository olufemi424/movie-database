import React, { Component } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";

const baseURL = "https://api.themoviedb.org/3/";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      movies: []
    };
  }

  updateInputValue = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  componentDidMount = () => {
    this.runSearch = state => {
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
            <button onClick={this.runSearch} className="button is-info">
              Search
            </button>
          </form>
        </section>
        <SearchResults movies={this.state.movies} />
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

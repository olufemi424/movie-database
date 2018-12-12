import React, { Component } from "react";
import styled from "styled-components";
import SearchResults from "./SearchResults";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // keyword: "",
      movies: []
    };

    this.movieSearch = this.movieSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue = e => {
    this.props.updateInputValue(e.target.value)
  };

  movieSearch = (e) => {
    e.preventDefault();
    this.props.movieSearch()
  }

  render() {
    return (
      <SearchStyle>
        <section className="section">
          <form className="form"
            id="addItemForm" >
            <input type="text"
              className="input"
              id="addInput"
              placeholder="Enter Movie Name.."
              value={this.value}
              onChange={this.updateInputValue} />
            <button onClick={this.movieSearch} className="button is-info" > Search </button >
          </form>
        </section>
        <SearchResults movies={this.state.movies} />
      </SearchStyle >
    );
  }
}

export default Search;

export const SearchStyle = styled.div`
  input {
        font - size: 16px;
padding: 10px;
margin-top: 15px;
outline: none;
}
  button {
        font - size: 16px;
padding: 12px;
margin-left: 10px;
background-color: #222;
color: #f4f4f4;
outline: none;
}
`;
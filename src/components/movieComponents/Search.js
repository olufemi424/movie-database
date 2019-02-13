import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { movieSearch } from "../../store/actions/movieActions";

class Search extends Component {
  state = {
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  searchMovie = e => {
    e.preventDefault();
    this.props.movieSearch(this.state.keyword);
    this.props.history.push("/search");
  };

  render() {
    return (
      <React.Fragment>
        <section>
          <form className="form" onSubmit={this.searchMovie}>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="keyword"
                placeholder="Search"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form__group">
              <button className="form__btn">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  movieSearch: keyword => dispatch(movieSearch(keyword))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Search));

// import { NextButton, PrevButton } from "./movieActionsButton/NextButton";

// handleNextClick = () => {
//   let cur = this.props.movies.movies.page;
//   let nextpage = cur + 1;
//   this.setState({ page: nextpage });
//   this.props.getMovies(nextpage);
// };

// handlePrevClick = () => {
//   let cur = this.props.movies.movies.page;
//   let nextpage = cur - 1;
//   this.setState({ page: nextpage });
//   this.props.getMovies(nextpage);
// };

// {this.state.page > 1 && <PrevButton onClick={this.handlePrevClick} />}
// <NextButton onClick={this.handleNextClick} />

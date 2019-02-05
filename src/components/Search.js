import React, { Component } from "react";
import { connect } from "react-redux";
import { movieSearch } from "../store/actions/movieActions";

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
                placeholder="Movie name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form__group">
              <button className="form__btn">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    movieSearch: keyword => dispatch(movieSearch(keyword))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);

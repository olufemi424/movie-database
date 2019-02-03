import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "56cbdfc579474a601e5ee545721a625f";

export const getMovies = () => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(({ data }) => {
        dispatch(setGetMovies(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", payload: err });
      });
  };
};

// set state to movies
const setGetMovies = data => {
  return {
    type: "GET_MOVIES",
    payload: data
  };
};

export const movieSearch = keyword => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}search/collection?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1`
      )
      .then(({ data }) => {
        dispatch(setMovieSearch(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", err });
      });
  };
};

const setMovieSearch = data => {
  return {
    type: "GET_MOVIES_SEARCH",
    payload: data
  };
};

export const movieDetails = id => {
  return dispatch => {
    //async call
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US`
      )
      .then(({ data }) => {
        dispatch(setMoiveDetails(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", err });
      });
  };
};

const setMoiveDetails = data => {
  return {
    type: "GET_MOVIE_DETAILS",
    payload: data
  };
};

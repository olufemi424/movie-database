import axios from "axios";
import {
  GET_MOVIES,
  GET_MOVIES_SEARCH,
  GET_MOVIE_DETAILS,
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_POPULAR_SHOWS,
  GET_TOP_RATED_SERIES,
  ERROR_FETCHING_MOVIES
} from "./types";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "56cbdfc579474a601e5ee545721a625f";

//SEARCH BY KEYWORD ACTION
export const movieSearch = keyword => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}/search/multi?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        dispatch(setMovieSearch(data));
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_MOVIES, err });
      });
  };
};

//DISPATCH SEARCH ACTION TO UPDATE STORE OF MOVIES
const setMovieSearch = data => {
  return {
    type: GET_MOVIES_SEARCH,
    payload: data
  };
};

// GET MOVIE DETAILS OF INDIVIDUAL MOVIE BY ID, TYPE, PAGE => ACTIONS
export const fetchMovie = (type, id, page = 1) => {
  //GET URL AND STORE IN A VARIABLE
  const searchUrl = getAPIurl(type, id, page);
  return dispatch => {
    //async call
    axios
      .get(searchUrl)
      .then(({ data }) => {
        dispatch(setFetchedMovie(data, type));
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_MOVIES, err });
      });
  };
};

//NAMED ACTIONS
export const fetchMovies = fetchMovie.bind(this, GET_MOVIES);
export const getMovieDetails = fetchMovie.bind(this, GET_MOVIE_DETAILS);
export const getTrendingMovies = fetchMovie.bind(this, GET_TRENDING_MOVIES);
export const getPopularMovies = fetchMovie.bind(this, GET_POPULAR_MOVIES);
export const getPopularTvShows = fetchMovie.bind(this, GET_POPULAR_SHOWS);
export const getTopRatedTvShows = fetchMovie.bind(this, GET_TOP_RATED_SERIES);

//DISPATCH ACTION TYPE TO UPDATE MOVIE DETAILS OF INDIVIDUAL MOVIE
const setFetchedMovie = (data, type) => {
  return {
    type: type,
    payload: data
  };
};

//GET API URL
const getAPIurl = (type, id, page) => {
  switch (type) {
    case GET_MOVIES:
      return `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`;
    case GET_MOVIE_DETAILS:
      return `${baseURL + id}?api_key=${API_KEY}&language=en-US&page=${page}`;
    case GET_TRENDING_MOVIES:
      return `${baseURL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
    case GET_POPULAR_MOVIES:
      return `${baseURL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
    case GET_POPULAR_SHOWS:
      return `${baseURL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`;
    case GET_TOP_RATED_SERIES:
      return `${baseURL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    default:
      return null;
  }
};

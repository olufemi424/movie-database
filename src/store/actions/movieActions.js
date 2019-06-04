import axios from "axios";
import * as TYPES from "./types";

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
        dispatch({
          type: TYPES.GET_MOVIES_SEARCH,
          payload: data
        });
      })
      .catch(err => {
        dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, err });
      });
  };
};

//MOVIE DETAILS
export const getMovieDetails = movieId => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL + movieId}?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: TYPES.GET_MOVIE_DETAILS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

//DISCOVER MOVIES
export const discoverMoviesAction = (page = 1) => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    dispatch({
      type: TYPES.GET_DISCOVER_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

//TRENDING MOVIES
export const getTrendingMovies = () => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: TYPES.GET_TRENDING_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

//POPULAR MOVIES
export const getPopularMovies = () => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: TYPES.GET_POPULAR_MOVIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TYPES.ERROR_FETCHING_MOVIES,
      payload: err
    });
  }
};

//RECOMMENDATIONS
//POPULAR MOVIES
export const getRecommendationMovies = movieId => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({
      type: TYPES.GET_RECOMMENATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

//POPULAR TV SHOWS
export const getPopularTvShows = () => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}/tv/on_the_air?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: TYPES.GET_POPULAR_SHOWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

//TOP RATED TV SHOWS
export const getTopRatedTvShows = () => async dispatch => {
  try {
    const res = await axios.get(
      `${baseURL}/tv/top_rated?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: TYPES.GET_TOP_RATED_SERIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TYPES.ERROR_FETCHING_MOVIES, payload: err });
  }
};

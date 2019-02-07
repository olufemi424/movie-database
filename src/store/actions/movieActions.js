import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "56cbdfc579474a601e5ee545721a625f";

//GET NOW PLAYING MOVIES ACTION
export const getMovies = (page = 1) => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(({ data }) => {
        dispatch(setGetMovies(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", payload: err });
      });
  };
};

// DISPATCH ACTION OF NOW PLAYING MOVIES
const setGetMovies = data => {
  return {
    type: "GET_MOVIES",
    payload: data
  };
};

//TRENDING MOVIES
export const getTrendingMovies = () => {
  return dispatch => {
    //async call
    axios
      .get(`${baseURL}trending/movie/week?api_key=${API_KEY}`)
      .then(({ data }) => {
        dispatch(setGetTrendingMovies(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_TRENDING_MOVIES", payload: err });
      });
  };
};

// DISPATH ACTION TO UPDATE STORE OF TRENDING
const setGetTrendingMovies = data => {
  return {
    type: "GET_TRENDING_MOVIES",
    payload: data
  };
};

//POPULAR MOVIES ACTION
export const getPopularMovies = (page = 1) => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(({ data }) => {
        dispatch(setGetPopularMovies(data));
      })
      .then(err => {
        dispatch({ type: "ERROR_FETCHING_POPULAR_MOVIES", payload: err });
      });
  };
};

// DISPATH POPULAR ACTION TO UPDATE STORE OF TRENDING
const setGetPopularMovies = data => {
  return {
    type: "GET_POPULAR_MOVIES",
    payload: data
  };
};

//SEARCH BY KEYWORD ACTION
export const movieSearch = keyword => {
  return dispatch => {
    //async call
    axios
      .get(
        `${baseURL}search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        dispatch(setMovieSearch(data));
      })
      .catch(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", err });
      });
  };
};

//DISPATCH SEARCH ACTION TO UPDATE STORE OF MOVIES
const setMovieSearch = data => {
  return {
    type: "GET_MOVIES_SEARCH",
    payload: data
  };
};

//GET MOVIE DETAILS OF INDIVIDUAL MOVIE BY ID ACTION
export const getMovieDetails = id => {
  return dispatch => {
    //async call
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US`
      )
      .then(({ data }) => {
        dispatch(setMoiveDetails(data));
      })
      .catch(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", err });
      });
  };
};

//DISPATCH ACTION TYPE TO UPDATE MOVIE DETAILS OF INDIVIDUAL MOVIE
const setMoiveDetails = data => {
  return {
    type: "GET_MOVIE_DETAILS",
    payload: data
  };
};

import axios from "axios";

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
export const fetchMovie = (type, id, page = 1) => {
  const term = getType(type, id);

  return dispatch => {
    //async call
    axios
      .get(`${baseURL}${term}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(({ data }) => {
        dispatch(setFetchedMovie(data, type));
      })
      .catch(err => {
        dispatch({ type: "ERROR_FETCHING_MOVIES", err });
      });
  };
};

//DISPATCH ACTION TYPE TO UPDATE MOVIE DETAILS OF INDIVIDUAL MOVIE
const setFetchedMovie = (data, type) => {
  return {
    type: type,
    payload: data
  };
};

const getType = (type, id) => {
  switch (type) {
    case "GET_MOVIES":
      return "/movie/now_playing";
    case "GET_MOVIE_DETAILS":
      return `${id}`;
    case "GET_TRENDING_MOVIES":
      return "/trending/movie/week";
    case "GET_POPULAR_MOVIES":
      return "/movie/popular";
    case "GET_TV_DETAILS":
      return `${id}`;
    case "GET_POPULAR_SERIES":
      return "/tv/on_the_air";
    case "GET_TOP_RATED_SERIES":
      return "/tv/top_rated";

    default:
      return null;
  }
};

fetchMovie("GET_MOVIES");

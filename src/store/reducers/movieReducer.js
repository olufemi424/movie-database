import {
  GET_MOVIES,
  GET_MOVIES_SEARCH,
  GET_MOVIE_DETAILS,
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_POPULAR_SHOWS,
  GET_TOP_RATED_SERIES,
  ERROR_FETCHING_MOVIES
} from "../actions/types";

const initState = {
  movies: [],
  movie: {},
  trendingMovies: {},
  popularMovies: {},
  popularSeries: {},
  topRatedSeries: {},
  movieSearchResult: {},
  searchKeyword: "batman",
  errors: null
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload
      };
    case GET_MOVIES_SEARCH:
      return {
        ...state,
        movieSearchResult: action.payload
      };
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    case GET_POPULAR_SHOWS:
      return {
        ...state,
        popularSeries: action.payload
      };
    case GET_TOP_RATED_SERIES:
      return {
        ...state,
        topRatedSeries: action.payload
      };
    case ERROR_FETCHING_MOVIES:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;

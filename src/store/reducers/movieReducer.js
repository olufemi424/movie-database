import * as TYPES from "../actions/types";

const initState = {
  movies: [],
  discoverMovies: {},
  trendingMovies: {},
  popularMovies: {},
  popularSeries: {},
  topRatedSeries: {},
  recommendations: {},
  movieSearchResult: {},
  searchKeyword: "batman",
  errors: null
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload
      };
    case TYPES.GET_DISCOVER_MOVIES:
      return {
        ...state,
        discoverMovies: action.payload
      };
    case TYPES.GET_MOVIES_SEARCH:
      return {
        ...state,
        movieSearchResult: action.payload
      };
    case TYPES.GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload
      };
    case TYPES.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    case TYPES.GET_RECOMMENATION:
      return {
        ...state,
        recommendations: action.payload
      };
    case TYPES.GET_POPULAR_SHOWS:
      return {
        ...state,
        popularSeries: action.payload
      };
    case TYPES.GET_TOP_RATED_SERIES:
      return {
        ...state,
        topRatedSeries: action.payload
      };
    case TYPES.ERROR_FETCHING_MOVIES:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;

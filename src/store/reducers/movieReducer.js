const initState = {
  movies: [],
  movie: {},
  errors: null
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload
      };
    case "GET_MOVIES_SEARCH":
      return {
        ...state,
        movies: action.payload
      };
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movie: action.payload
      };
    case "ERROR_FETCHING_MOVIES":
      return {
        ...state,
        errors: action.err
      };
    default:
      return state;
  }
};

export default movieReducer;

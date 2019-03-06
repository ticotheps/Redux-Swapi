import {
  FETCH_CHAR_FETCHING,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";


const initialState = {
  characters: [], 
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_FETCHING:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: action.payload
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        error: "Whoops, something went wrong.",
        isFetching: false
      };
    default:
      return state;
  }
};

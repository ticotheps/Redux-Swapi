import {
  FETCH_CHARS_FETCHING,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";


const initialState = {
  characters: [], 
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: [
          ...state.characters,
          ...action.payload
        ],
        isFetching: false,
      };
    default:
      return state;
  }
};

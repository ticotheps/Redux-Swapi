import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";


const initialState = {
  characters: [], 
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

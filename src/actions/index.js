// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARS_FETCHING = "FETCH_CHARS_FETCHING";
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAILURE = "FETCH_CHARS_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const getCharacters = () => dispatch => {
    console.log("The getChar() function is running!");

    dispatch({ type: FETCH_CHARS_FETCHING });

    axios
        .get("https://swapi.co/api/people/")
        .then( ({ data }) => {
            // console.log(data.results);
            dispatch({
                type: FETCH_CHARS_SUCCESS,
                payload: data.results
            });
        })
        .catch(err => {
            // console.log(err);
            dispatch({
                type: FETCH_CHARS_FAILURE,
                payload: err
            });
        });
};

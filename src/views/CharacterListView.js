import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("CDM is running!");
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching your Star Wars characters at the moment...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters, 
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }

};

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  { getCharacters }
)(CharacterListView);

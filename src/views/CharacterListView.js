import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChar } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("CDM is running!", this.props.characters);
    // call our action
    getChar();
  }

  render() {
    if (this.props.fetching) {
      console.log(this.props.characters);
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
const mapStateToProps = state => ({
  characters: state.characters, 
  isFetching: state.isFetching
});

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  { getChar }
)(CharacterListView);

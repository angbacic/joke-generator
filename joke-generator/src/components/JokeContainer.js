import React, { Component } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions/joke";
import Joke from "../components/Joke";

class JokeContainer extends Component {
  componentDidMount() {
    this.props.getJoke();
  }

  render() {
    // const joke = this.props.joke;
    return (
      <div>
        <div>
          <Joke joke={this.props.joke.setup} />
        </div>
        <div>
          <Joke joke={this.props.joke.punchline} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  console.log("state", state),
  {
    joke: state
  }
);

export default connect(
  mapStateToProps,
  { getJoke }
)(JokeContainer);

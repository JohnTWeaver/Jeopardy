import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category = "loidationg";

    if (this.state.data.category && this.state.category.title) {
      category = this.state.data.category.title;
    }

    return (
      <div>
        {/* {JSON.stringify(this.state.data)} 
        condtional rendering
        */}
        <strong>Questrion :</strong> {this.state.data.question}
        <strong> Value :</strong> {this.state.data.value}
        <strong> Category :</strong> {category}
        <strong>Score :</strong> {this.state.score}
      </div>
    );
  }
}
export default Jeopardy;

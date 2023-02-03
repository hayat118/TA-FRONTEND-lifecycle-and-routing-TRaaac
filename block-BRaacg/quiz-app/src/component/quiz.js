import React from "react";
import { NavLink } from "react-router-dom";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      index: 0,
      score: 0,
      showscore: false,
    };
  }

  componentDidMount() {
    fetch(`https://opentdb.com/api.php?amount=10&category=10&difficulty=medium`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
    // .then((data) => console.log(data));
  }

  handleNext = () => {
    let data = this.state.data;

    if (this.state.index < data.results.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  handleClick = (result) => {
    let data = this.state.data;
    if (this.state.index < data.results.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    }

    let correct = data.results[this.state.index];

    if (result === correct.correct_answer && this.state.index <= 9) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    console.log(result);
    console.log(this.state.disabled, "dis");
  };

  render() {
    let data = this.state.data;

    if (!this.state.data) {
      return <h1>Fetching</h1>;
    }

    if (this.state.showscore) {
      return <h1>Your Score is:{this.state.score}</h1>;
    }

    var incorrect_answers = data.results[this.state.index].incorrect_answers;
    var random_number = Math.floor(Math.random() * 4);

    return (
      <div>
        <h2>Score:{this.state.score}</h2>
        <h2>Question:{this.state.index + 1}/10</h2>
        <div>
          <h3 className="question">
            Question1:{data.results[this.state.index].question}
          </h3>
          <ul>
            {incorrect_answers
              .slice(0, random_number)
              .concat(data.results[this.state.index].correct_answer)
              .concat(incorrect_answers.slice(random_number))
              .map((result, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => this.handleClick(result)}
                    className="answer"
                  >
                    {result}
                  </li>
                );
              })}
          </ul>
          {this.state.index <= data.results.length - 2 ? (
            <NavLink className="next" to="" onClick={this.handleNext}>
              Next Question
            </NavLink>
          ) : (
            <button
              className="next"
              onClick={() => {
                this.setState({
                  showscore: true,
                });
              }}
            >
              Results
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";
// import Quiz from "./quiz";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      quiz: "",
    };
  }

  componentDidMount() {
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
    // .then((data) => console.log(data, "data"));
  }

  // handleClick = () => {
  //   this.setState({
  //     quiz: <Route path="/quiz" element={<Quiz />} />,
  //   });
  // };

  render() {
    if (!this.state.data) {
      return <h2>Loading...</h2>;
    }
    return (
      <>
        <section className="start-box">
          <h1>Quiz App</h1>
          <div>
            <label htmlFor="dificulty">Choose Dificulty:</label>
            <select name="dificulty" id="dificulty">
              {this.state.data.trivia_categories.map((post, i) => {
                return (
                  <option key={post.id}>
                    {this.state.data.trivia_categories[i].name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="category">Choose Category:</label>
            <select name="category" id="category">
              <option>Easy</option>
              <option>Mediuum</option>
              <option>Hard</option>
            </select>
          </div>
          <div>
            <NavLink className="start" to="/quiz">
              START
            </NavLink>
          </div>
        </section>
      </>
    );
  }
}

export default Start;

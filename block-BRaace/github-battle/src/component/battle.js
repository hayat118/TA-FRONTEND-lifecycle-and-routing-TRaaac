import React from "react";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  // componentDidMount() {
  //   fetch(`https://api.github.com/users/gearon`)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ data }));
  //   // .then((data) => console.log(data));
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${this.state.input}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
    // .then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <div>
          <h1>Instruction</h1>
        </div>
        <div className="flex justify">
          <div>
            <h3>Enter Two Github Users</h3>
            <a href="A">
              <p className="git-box">Users</p>
            </a>
          </div>
          <div>
            <h3>Battle</h3>
            <a href="A">
              <p className="git-box">Users</p>
            </a>
          </div>
          <div>
            <h3>See The Winner</h3>
            <a href="A">
              <p className="git-box">Users</p>
            </a>
          </div>
        </div>
        <h1>Players</h1>
        <div className="flex justify">
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor="">Player One</label>
              <br />
              <input
                type="text"
                value={this.state.input}
                onChange={(event) => this.handleChange(event)}
                placeholder="github username"
              />
              <input type="submit" value="submit" />
            </form>

            {!this.state.data ? "" : <h1>{this.state.data.login}</h1>}
          </div>
          <div>
            <form>
              <label htmlFor="">Player Two</label>
              <br />
              <input
                type="text"
                value={this.state.input}
                onChange={(event) => this.handleChange(event)}
                placeholder="github username"
              />
              <input type="submit" value="submit" />
            </form>
            {!this.state.data ? "" : <h1>{this.state.data.login}</h1>}
          </div>
        </div>
      </>
    );
  }
}
export default Battle;

import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isDisplay: false,
      user: "",
      name: "",
      loading: "Random User",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  handleClick = (event) => {
    let value = event.target.id;
    let info = event.target.innerText;
    this.setState({
      user: value,
      name: info,
      isDisplay: true,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      loading: "Loading...",
    });
  };

  render() {
    if (!this.state.data) {
      return <h1>Loading....</h1>;
    }
    return (
      <>
        <h1>User Information</h1>

        <img src={this.state.data.results[0].picture.thumbnail} alt="/" />
        {this.state.isDisplay ? (
          <div>
            <h2>My {this.state.name} Is: </h2>
            <p>{this.state.user}</p>
          </div>
        ) : (
          <div>
            <h2>My Name Is:</h2>
            <p>{this.state.data.results[0].name.first}</p>
          </div>
        )}
        <div>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].name.first}
          >
            Name
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].email}
          >
            Email
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].dob.age}
          >
            Age
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].location.street.name}
          >
            Street
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].phone}
          >
            Phone
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.data.results[0].login.password}
          >
            Password
          </button>

          <br />
          <a
            href="/"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          >
            <button type="submit">{this.state.loading}</button>
          </a>
        </div>
      </>
    );
  }
}
export default Random;

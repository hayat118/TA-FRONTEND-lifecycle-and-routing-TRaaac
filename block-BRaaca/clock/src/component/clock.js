import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: false,
      countdown: null,
    };
  }

  handleClick = () => {
    this.setState({
      time: !this.state.time,
    });
  };

  render() {
    return (
      <>
        <h1>Timers</h1>
        {this.state.time ? (
          <div>
            <Time handleClick={this.handleClick} />
          </div>
        ) : (
          <div>
            <button onClick={this.handleClick}>Show Time</button>
          </div>
        )}
      </>
    );
  }
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <>
        <div>
          <h1>The Time Is:{this.state.date.toLocaleTimeString()} </h1>
          <button onClick={this.props.handleClick}>Hide Time</button>
        </div>
      </>
    );
  }
}

export default Clock;

import React from "react";
import StopwatchDisplay from "./stopwatchdisplay";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  start = () => {
    this.setState({ running: !this.state.running });
    this.watch = setInterval(() => this.pace(), 10);
  };

  stop = () => {
    this.setState({ running: !this.state.running });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  render() {
    return (
      <>
        <h1>Stop Watch</h1>
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />
        {this.state.running ? (
          <div>
            <button onClick={this.stop}>STOP</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        ) : (
          <div>
            <button onClick={this.start}>START</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        )}
      </>
    );
  }
}

export default Stopwatch;

import React from "react";
import Square from "./square";
import "../styles/index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsTurn: true,
      isWinner: false,
    };
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = (i) => {
    // console.log("clicked on ", i);

    const squares = this.state.squares.slice();

    if (squares[i] !== null) {
      return;
    }
    squares[i] = this.state.xIsTurn ? "X" : "O";
    this.setState({
      squares: squares,
      xIsTurn: !this.state.xIsTurn,
      // isWinner: true,
    });
  };

  handleReset = () => {
    this.setState({
      squares: Array(9).fill(null),
    });
  };

  render() {
    // const status = "Next Player: " + (this.state.xIsTurn ? "X" : "O");

    const isWinner = this.calculateWinner(this.state.squares);
    let status;
    if (isWinner) {
      status = "Winner:" + isWinner;
    } else {
      status = "Next Player:" + (this.state.xIsTurn ? "X" : "O");
    }

    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="status">
          {status}
          <button onClick={this.handleReset}>Play Again</button>
        </div>
        <div className="board-container">
          {this.state.isWinner ? (
            "winner" + isWinner
          ) : (
            <>
              <div className="board-row">
                <Square
                  onClick={() => this.handleClick(0)}
                  value={this.state.squares[0]}
                />
                <Square
                  onClick={() => this.handleClick(1)}
                  value={this.state.squares[1]}
                />
                <Square
                  onClick={() => this.handleClick(2)}
                  value={this.state.squares[2]}
                />
              </div>
              <div className="board-row">
                <Square
                  onClick={() => this.handleClick(3)}
                  value={this.state.squares[3]}
                />
                <Square
                  onClick={() => this.handleClick(4)}
                  value={this.state.squares[4]}
                />
                <Square
                  onClick={() => this.handleClick(5)}
                  value={this.state.squares[5]}
                />
              </div>
              <div className="board-row">
                <Square
                  onClick={() => this.handleClick(6)}
                  value={this.state.squares[6]}
                />
                <Square
                  onClick={() => this.handleClick(7)}
                  value={this.state.squares[7]}
                />
                <Square
                  onClick={() => this.handleClick(8)}
                  value={this.state.squares[8]}
                />
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Board;

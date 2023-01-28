import React from "react";
import "../styles/index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div onClick={this.props.onClick} className="square">
          <h5>{this.props.value}</h5>
        </div>
      </>
    );
  }
}
export default Square;

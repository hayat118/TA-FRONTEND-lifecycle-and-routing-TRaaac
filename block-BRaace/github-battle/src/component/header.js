import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      // javascript: null,
    };
  }

  handleClick = () => {
    this.setState({
      data: this.state.data,
    });
  };

  render() {
    return (
      <>
        <div className="flex">
          <NavLink
            activeclassname="active"
            exact="true"
            className="margin-20"
            to="/"
          >
            Popular
          </NavLink>
          <NavLink activeclassname="active" to="/battle">
            Battle
          </NavLink>
        </div>
        <div>
          <ul className=" header">
            <NavLink
              activeclassname="active"
              onClick={this.handleClick}
              to="/all"
            >
              <li>All</li>
            </NavLink>
            <NavLink
              activeclassname="active"
              onClick={this.handleClick}
              to="/javascript"
            >
              <li>JavaScript</li>
            </NavLink>
            <NavLink activeclassname="active" to="/ruby">
              <li>Ruby</li>
            </NavLink>
            <NavLink activeclassname="active" to="/java">
              <li>Java</li>
            </NavLink>
            <NavLink activeclassname="active" to="/css">
              <li>CSS</li>
            </NavLink>
            <NavLink activeclassname="active" to="/python">
              <li>Python</li>
            </NavLink>
          </ul>
        </div>
      </>
    );
  }
}
export default Header;

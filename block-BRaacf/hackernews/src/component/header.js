import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
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
        <section className="flex grid-item justify padding-20">
          <div>
            <NavLink to="">GIZMO</NavLink>
          </div>
          <div>
            <input type="text" name="search" placeholder="Search Keyboard" />
            <NavLink className="en-box" to="">
              EN
            </NavLink>
          </div>
        </section>
        <section className="flex grid-item justify padding-20">
          <NavLink
            onClick={this.handleClick}
            activeclassname="active"
            exact="true"
            className="nav-box"
            to="/all"
          >
            ALL
          </NavLink>
          <NavLink className="nav-box" to="#">
            ABS News (AU)
          </NavLink>
          <NavLink className="nav-box" to="#">
            Aftenposten
          </NavLink>
          <NavLink className="nav-box" to="#">
            CNN
          </NavLink>
          <NavLink className="nav-box" to="#">
            Engadget
          </NavLink>
          <NavLink className="nav-box" to="#">
            ESPN
          </NavLink>
          <NavLink className="nav-box" to="#">
            Fortune
          </NavLink>
        </section>
      </>
    );
  }
}
export default Header;

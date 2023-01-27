import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <>
        <section className="flex">
          <div className="sidebar">
            <NavLink activeclassname="active" exact to="/">
              <li className="side-box">HOME</li>
            </NavLink>
            <NavLink activeclassname="active" to="/article">
              <li className="side-box">ARTICLES</li>
            </NavLink>
            <NavLink activeclassname="active" to="/people">
              <li className="side-box">PEOPLE</li>
            </NavLink>
            <NavLink activeclassname="active" to="/book">
              <li className="side-box">BOOKS</li>
            </NavLink>
            <NavLink activeclassname="active" to="/help">
              <li className="side-box">HELP & SUPPORT</li>
            </NavLink>
          </div>

          <div className="colored-box">
            <h2>Welcome to Homepage</h2>
            <div className="flex right-20">
              <NavLink
                activeclassname="active"
                className="right-20 box"
                to="/article"
              >
                ARTICLE PAGE
              </NavLink>
              <NavLink
                activeclassname="active"
                className="right-20 box"
                to="/book"
              >
                BOOK PAGE
              </NavLink>
              <NavLink
                activeclassname="active"
                className="right-20 box"
                to="/people"
              >
                PEOPLE PAGE
              </NavLink>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Dashboard;

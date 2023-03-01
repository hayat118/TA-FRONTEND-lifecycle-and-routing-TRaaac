import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

function NewsUI(props) {
  let data = props.data;
  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="flex-container padding-20">
        <div className="grid-item">
          <img src={data.articles[0].urlToImage} alt="/" />
        </div>
        <div>
          <div className="grid-item padding-20">
            <h2>title:{data.articles[0].title}</h2>
          </div>
          <div className="grid-item padding-20">
            <p>Discription:{data.articles[0].description}</p>
            <NavLink className="read" to="">
              Read More
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default NewsUI;

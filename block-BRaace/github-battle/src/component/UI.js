import React from "react";

function UI(props) {
  let data = props.data;
  // console.log(data);
  if (!data) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <h1>Top Star</h1>
      <section className="flex wrap">
        {data.items.map((user, index) => {
          return (
            <div className="box" key={user.id}>
              <div className="user-box">
                <small>id:{data.items[index].id}</small>
                <br />

                <img src={data.items[index].owner.avatar_url} alt="/" />

                <h2>{data.items[index].name}</h2>

                <ul className="white">
                  <li>User Name:{data.items[index].name}</li>
                  <li>Stars:{data.items[index].size}</li>
                  <li>Forks:{data.items[index].forks_count}</li>
                  <li>Issues:{data.items[index].open_issues_count}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default UI;

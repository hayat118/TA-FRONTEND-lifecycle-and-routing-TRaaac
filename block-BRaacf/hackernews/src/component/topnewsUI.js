import React from "react";

class TopnewsUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b215554af7146cba4f0c56a51ee7dca`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
    // .then((data) => console.log(data));
  }

  render() {
    if (!this.state.data) {
      return <h2>Data Fetching..</h2>;
    }
    return (
      <>
        <section className="padding-20 flex wrap ">
          {this.state.data.articles.map((post, i) => {
            return (
              <div className="topnews-box " key={post.url}>
                <div>
                  <img
                    className="top-img"
                    src={this.state.data.articles[i].urlToImage}
                    alt=""
                  />
                </div>
                <div className="padding-20">
                  <small>{this.state.data.articles[i].source.name}</small>
                  <h2 className="title">
                    Title:{this.state.data.articles[i].title}
                  </h2>
                  {/* <p>Content:{this.state.data.articles[i].content}</p> */}
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}
export default TopnewsUI;

import React from "react";

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b215554af7146cba4f0c56a51ee7dca`
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
        <h1>Headlines</h1>
        <section className=" flex wrap ">
          {this.state.data.articles.map((post, i) => {
            return (
              <div className="headlines-box " key={post.url}>
                <div className="padding-20">
                  <small>{this.state.data.articles[i].source.name}</small>
                  <h2 className="title">
                    Title:{this.state.data.articles[i].title}
                  </h2>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}
export default Headlines;

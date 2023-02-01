import React from "react";
import Headlines from "./headlines";
import MainUI from "./mainUI";
import TopnewsUI from "./topnewsUI";

class All extends React.Component {
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
    return (
      <>
        <div className="grid-item flex ">
          <div>
            <MainUI data={this.state.data} />
            <TopnewsUI data={this.state.data} />
          </div>
          <div className="headlines">
            <Headlines data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
export default All;

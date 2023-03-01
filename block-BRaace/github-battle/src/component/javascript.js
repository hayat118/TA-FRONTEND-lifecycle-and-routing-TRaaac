import React from "react";
import UI from "../component/UI";

class Javascript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
    // .then((data) => console.log(data));
  }

  render() {
    // console.log(this.state.data);
    return <UI data={this.state.data} />;
  }
}
export default Javascript;

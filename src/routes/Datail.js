import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span> {location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
// 그런데 문제가 있다.
// 링크를 누르면 이동은 하는데, url링크에 넣으면 이동을 안한다.
// 이는 url로 찾아가면 state가 수정이 안되기 때문이다. 그래서 여기서 핸들링해줘야한다.
// 이를 리다이렉트라고 한다
// 여기서 this는 Movie.js이며, link된 주체를 뜻한다

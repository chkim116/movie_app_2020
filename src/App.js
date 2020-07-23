import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  pow = () => {
    this.setState((current) => ({ count: current.count * current.count }));
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <h3>The number is : {this.state.count}</h3>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.pow}>power</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
// this는 상위에 있는 선언한 객체를 불러온다고 생각하면된다. 여기서는 App을 뜻한다.
// 그래서 App.state.count라고 생각하면 된다.
// div안에 있어야 한다. (태그안에)
export default App;

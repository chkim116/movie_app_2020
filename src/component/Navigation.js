import React from "react";
import { Link } from "react-router-dom";
// 리액트 라우터 돔에서 link를 넣는다.
function Navigation() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About</Link>
    </div>
  );
}
// 눌렀을 떄 이동하고자 하는 path를 정한다. (a href와 같음)
// link ="/" 도 있지만 객체로 만들 수도 있다.
// 객체로 만들어서 props를 보내줄 수 있다. 에를들어
// link to={{pathname: "/about", state: { fromNavigation: true },}}
export default Navigation;

// a href는 새로고침하기 때문에 리액트의 성능을 죽인다.
//  그래서 링크와 to를 사용한다.

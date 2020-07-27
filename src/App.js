import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Datail";
import Navigation from "./component/Navigation";
import "./routes/Home.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
// route에는 중요한 게 두개 들어간다. 하나는 렌더링할 스크린, 다른 prop는 뭐할지 들어간다
// path로 들어가서 component를 보여줘라! 여기선 about
//  path는 이름이 뭐 어떻든 상관없다. 이름이 같을 필요는없다
// path는 url 주소라고 생각하면 된다.
// 예로 http://localhost:3001/movie_app_2020#/about일때랑 http://localhost:3001/movie_app_2020#/ 일떄랑 다르다.
// 전자에선 about이, 후자에선 home이 나온다
// 리액트는 url에 따라 보여주는 게 다르게 설정할 수 있다. /home/introduce/about 하면 다 보이고  /home/introduce면 두개만 /home이면 하나만 아니면 없다.
// exact ={true}는 오직 정한 url이 맞아들었을때만 렌더링 해준다.
//  path는 url의 경로, component는 어떤 걸 보여줄 건지 결정
// route 밖에서 link to를 쓸 수 없다 link는 라우터안에 path로 정의되어있어야한다
// 만약 link를 쓴다면 route안에 넣어야 한다!
// link안쓰면 안넣어도 상관없다
export default App;

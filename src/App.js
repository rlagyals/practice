import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Info from "./component/Info";
import Hobby from "./component/Hobby";

function App() {
  //여기서 모든 상태 관리하고 각 컴포넌트에 props로 넘겨주는 방식도 한번 구현해보십쇼
  //지금은 각 컴포넌트에서 상태를 관리하고 있음
  
  return (
    <>
      <div className="App">
        <Header title="본인 소개 페이지" />
        <Info/>
        <Hobby/>
      </div>
    </>
  );
}

export default App;

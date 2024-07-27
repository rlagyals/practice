import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Info from "./component/Info";
import Hobby from "./component/Hobby";

function App() {

  return (
    <>
      <div className="App">
        <Header title="본인 소개 페이지" />
        <Info/>
        <Hobby />
      </div>
    </>
  );
}

export default App;

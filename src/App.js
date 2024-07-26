import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Info from "./component/Info";
import Hobby from "./component/Hobby";

function App() {
  const [mode, setMode] = useState("READ");
  const toggleMode = (event) => {
    event.preventDefault();
    setMode((preMode => (preMode === "READ" ? "UPDATE" : "READ")));
  }

  return (
    <>
      <div className="App">
        <Header title="본인 소개 페이지" />
        <h2 className="App-title">프로필</h2>
        <Info mode={mode} setMode={setMode}/>
        <h2 className="App-title">취미목록</h2>
        <button
          className="btn"
          onClick={toggleMode}
        >
          수정
        </button>
        <Hobby mode={mode} setMode={setMode} />
      </div>
    </>
  );
}

export default App;

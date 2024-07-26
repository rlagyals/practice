import { useState } from "react";

function Edit({ mode, setMode }) {
  const [btn, setBtn] = useState("수정");
  const editMode = (event) => {
    event.preventDefault();
    setBtn((prevBtn) => (prevBtn === "수정" ? "완료" : "수정"));
    setMode((prevMode) => (prevMode === "READ" ? "EDIT" : "READ"));
  };

  return (
    <form className="btn">
      <button onClick={editMode}>{btn}</button>
    </form>
  );
}

export default function Info({ mode, setMode }) {
  const [name, setName] = useState("김효민");
  const [email, setEmail] = useState("rlagyals@ajou.ac.kr");
  const [age, setAge] = useState("23");

  const [nameMode, setNameMode] = useState("READ");
  const [emailMode, setEmailMode] = useState("READ");
  const [ageMode, setAgeMode] = useState("READ");

  return (
    <div>
      <ul className="App-list">
        <li>
          <span>이름:</span>
          {nameMode === "EDIT" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            name
          )}
          <Edit mode={nameMode} setMode={setNameMode} />
        </li>
        <li>
          <span>이메일:</span>
          {emailMode === "EDIT" ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            email
          )}
          <Edit mode={emailMode} setMode={setEmailMode} />
        </li>
        <li>
          <span>나이:</span>
          {ageMode === "EDIT" ? (
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          ) : (
            age
          )}
          <Edit mode={ageMode} setMode={setAgeMode} />
        </li>
      </ul>
    </div>
  );
}

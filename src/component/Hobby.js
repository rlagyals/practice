import { useState } from "react";
import Update from "./Update";

export default function Hobby({ mode, setMode }) {
  const [id, setID] = useState(null);
  const [nextID, setNextID] = useState(3);
  const [hobby, setHobby] = useState([
    { id: 1, topic: "게임하기" },
    { id: 2, topic: "야구보기" },
  ]);

  let hobbyList = hobby.map((h) => {
    return (
      <li key={h.id}>
        {h.topic}
        {mode === "UPDATE" ? (
          <Update
            hobby={hobby}
            setHobby={setHobby}
            setMode={setMode}
            id={h.id}
          />
        ) : null}
      </li>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const topic = event.target.hobby.value;
    if (topic.length === 0 ) {
      alert("입력하라고 ㅋ");
      return;
    }
    const newTopic = { id: nextID, topic: topic };
    const newTopics = [...hobby, newTopic];
    setHobby(newTopics);
    setID(nextID);
    setNextID(nextID + 1);
    event.target.hobby.value = "";
  };

  return (
    <div>
      <ul className="App-list">{hobbyList}</ul>
      <form
        onSubmit={handleSubmit}
      >
        <input type="text" name="hobby" placeholder="취미를 입력하세용"></input>
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

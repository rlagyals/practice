import { useState } from "react";
import Update from "./Update";

export default function Hobby() {
  const [ishobbyEdit, setIsHobbyEdit] = useState(false);
  // 이것도 true false로 더 간단하게 표현 가능 조건부 렌더링도 더 간결해짐
  const [newHobby, setNewHobby] = useState("");
  // input안에 들어가는 값도 state로 관리해주는게 코드 이해하기 쉬움
  const [hobbies, setHobbies] = useState([
    { id: 1, topic: "게임하기" },
    { id: 2, topic: "야구보기" },
  ]);
  
  const deleteHobby = (id) => { // 내가 선택한 hobby의 id
    setHobbies(hobbies.filter((hobby) => hobby.id !== id)) // 내가 선택한 hobby의 id를 제외한 나머지를 반환
  };

  // const addNewHobby = (event) => {
  //   event.preventDefault();
  //   const topic = event.target.hobby.value;
  //   if (topic.length === 0 ) {
  //     alert("입력하라고 ㅋ");
  //     return;
  //   }
  //   const newTopic = { id: hobbies.length + 1 , topic: topic };
  //   const newTopics = [...hobbies, newTopic];
  //   setHobbies(newTopics);
  //   event.target.hobby.value = "";
  // };

  // 기존의 방식이면 이렇게 쓰면 될듯
  // 근데 내가 보기엔 코드 가독성이 떨어져서 다른 방식으로 작성해봄 참고만 하십쇼

  const addNewHobby = (newHobby) => {
    if (hobbies.find((item) => item.topic === newHobby)) {
      alert("이미 존재하는 취미입니다.");
      return;
    }
    if (newHobby.length === 0) {
      alert("값이 비어있습니다.");
      return;
    }
    const newTopic = { id: hobbies.length + 1, topic: newHobby };
    setHobbies([...hobbies, newTopic]);
  };


  const hobbyList = hobbies.map((hobby) => {
    return (
      <li key={hobby.id}>
        {hobby.topic}
        {ishobbyEdit? (
          <button onClick={() => {deleteHobby(hobby.id)}}>삭제</button>
        ) : null}
      </li>
    );
  });


  // 만약에 id 값을 안줘도 map의 두번째 인자로 index를 사용할 수 있음
  const [isNoIdhobbyEdit, setIsNoIdIsHobbyEdit] = useState(false);
  const [noIdHobbies, setNoIdHobbies] = useState(['게임하기', '야구보기']);

  const deleteNoIdHobby = (id) => {
    setNoIdHobbies(noIdHobbies.filter((hobby, index) => index !== id))
  }

  //id 가 없을때 hobby 추가하는거 작성해보십쇼

  const noIdHobbyList = noIdHobbies.map((hobby, id) => {
    return (
      <li key={id}>
        {hobby}
        {isNoIdhobbyEdit? (
          <button onClick={() => {deleteNoIdHobby(id)}}>삭제</button>
        ) : null}
      </li>
    );
  });

  
  return (
    <div>
      <div>
      <h2 className="App-title">취미목록</h2>
      <button
        className="btn"
        onClick={() => {setIsHobbyEdit(!ishobbyEdit)}}
      >
        {ishobbyEdit ? "완료" : "수정"}
      </button>
      <ul className="App-list">{hobbyList}</ul>
      {/* <form
        onSubmit={addNewHobby}
      >
        <input type="text" name="hobby" placeholder="취미를 입력하세용"></input>
        <button type="submit">추가</button>
      </form> */}
      <input 
        style={{marginLeft: '100px'}}
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
      />
      <button
        onClick={() => addNewHobby(newHobby)}
      >
        추가
      </button>
      </div>
      <h2 className="App-title">취미목록(No Id)</h2>
      <button
        className="btn"
        onClick={() => {setIsNoIdIsHobbyEdit(!isNoIdhobbyEdit)}}
      >
        {ishobbyEdit ? "완료" : "수정"}
      </button>
      <ul className="App-list">{noIdHobbyList}</ul>
    </div>
  );
}

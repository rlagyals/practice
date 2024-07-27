import { useState } from "react";

export default function Info({}) {
  //-> 여기에 인자가 안쓰이는데 왜? 기존에도 mode는 안쓰였음
  const [name, setName] = useState("김효민");
  const [email, setEmail] = useState("rlagyals@ajou.ac.kr");
  const [age, setAge] = useState("23");
 
  // const [nameMode, setNameMode] = useState("READ") -> 이거 대신 true false를 활용해서 더 간단하게 표현 가능
  const [isNameEdit, setIsNameEdit] = useState(false)
  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isAgeEdit, setIsAgeEdit] = useState(false)

  const EditForm = ({title, value, setValue, isValueEdit, setIsValueEdit}) => {
    return (
      <li>
        <span>{title}:</span>
        {isValueEdit ? (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          value
        )}
        <button 
          style={{margin: '20px' }} 
          onClick={() => setIsValueEdit(!isValueEdit)}>
          {isValueEdit ? "저장" : "수정"}
        </button>
      </li>
    );
  }
  // 이것도 컴포넌트로 만들어서 재사용성을 높일 수 있음
  return (
    <div>
      <h2 className="App-title">프로필</h2>
      <ul className="App-list">
        <EditForm 
          title="이름" 
          value={name} 
          setValue={setName} 
          isValueEdit={isNameEdit} 
          setIsValueEdit={setIsNameEdit}/>
        <EditForm 
          title="이메일"
          value={email} 
          setValue={setEmail} 
          isValueEdit={isEmailEdit} 
          setIsValueEdit={setIsEmailEdit} />
        <EditForm 
          title="나이" 
          value={age} 
          setValue={setAge} 
          isValueEdit={isAgeEdit} 
          setIsValueEdit={setIsAgeEdit} />
      </ul>
    </div>
  );
}

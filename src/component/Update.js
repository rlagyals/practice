import { useState } from "react";

export default function Update({ hobby, setHobby, setMode, id }) {
  return (
    <button
      onClick={() => {
        const newHobby = hobby.filter((h) => h.id !== id);
        setHobby(newHobby);
        setMode("READ");
      }}
    >삭제</button>
  );
}

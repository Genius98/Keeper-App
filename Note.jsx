import React from "react";

function Note(props) {//to be able to somehow get this (line12) delete button to trigger a funcin the pp.jsx for this we rely on props
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

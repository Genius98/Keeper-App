import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({  //creating const to save the input of title & content
    title: "",
    content: ""
  });

  function handleChange(event) {
    {/*handlechange going to rcv an event when it gets triggered*/ }
    const { name, value } = event.target; // create new destructed object tht will tap into event.terget.name & event.target.value

    setNote(prevNote => {
      //setnote going to be able to rcv the previousnote & i'm going to use that to add to the existing note
      return {
        ...prevNote, //its spread operator which spread all key value pairs tht is currently existing in our note
        [name]: value
      };
    });
  }

  function submitNote(event) {
    {/*event is triggered by onclick*/ }
    props.onAdd(note);// when notes get added over to our app.jsx we set the note state to both an empty title & content so after getting added it will disappear from input placeholder
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}//for update them when they get changed*/}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"//textarea also like input*
          onChange={handleChange} //for update them when they get changed
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form >
    </div >
  );
}

export default CreateArea;

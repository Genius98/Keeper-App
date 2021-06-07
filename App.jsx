import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  {/*addnote going to rcv note object*/ }
  const [notes, setNotes] = useState([]);//creating array for the notes

  function addNote(newNote) {
    setNotes(prevNotes => { //setNotes gets a array being returned 
      return [...prevNotes, newNote]; //so we get hold prevnote & newnote
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => { //setnotes will hold the prevoius note
      return prevNotes.filter((noteItem, index) => {//once we have access to all previous notes array then we can loop through it using the filter func tht accepts up to three arguments
        return index !== id; //return the array that contains everything in the previous note other than the ones where the index matches the id of the note to be deleted
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} /> {/*addNote is added as a value to one of the props for the create area*/}
      {notes.map((noteItem, index) => {//map going to take a func & loop through this notes array & get hold of the note items inside & execute this func
        return (
          <Note
            //these props will be passed over
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

//1.implement the add note functionality for that-
// create a constant that keeps track of the title & content
//pass the newly created note back to the app
//add new note to the array
//take the array & render separate note components of the items 

//2.Delete note functionality for that-
//creating a callback from the note component to trigger a delete function
//pass a id over to the app component & pass it back to the app when deleting
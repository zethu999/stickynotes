import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Fotter";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArr, setNote] = useState([])

  function addNote(newNote) {
    setNote(preVal => {return[...preVal, newNote]})
  }

  function deleteNote(id) {
    setNote(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {
        noteArr.map((note, index) =>{ return(
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            
          />
        )})
      }
      <Footer />
    </div>
  );
}

export default App;

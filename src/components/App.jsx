import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../note";
import CreateArea from "./CreateArea";
import DynamicFormBuilder from "./DynamicForm";

function App() {
  // const [listItems, setListItem] = useState([]);

  // const addNote = (note) => {
  //   // Adding a unique id to each note using Date.now() to ensure uniqueness

  //   const newNote = { ...note, id: Date.now() };
  //   setListItem((prevNotes) => {
  //     return [...prevNotes, newNote];
  //   });
  // };

  // const deleteNote = (id) => {
  //   console.log(id);
  //   setListItem((prevNotes) => {
  //     return prevNotes.filter((note) => note.id !== id);
  //   });
  // };

  return (
    <div>
      <DynamicFormBuilder />
      {/* <Header />
      <CreateArea onAdd={addNote} /> */}
      {/* 
      {listItems.map((list) => {
        return (
          <Note
            key={list.id}
            id={list.id}
            title={list.title}
            content={list.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* <Note key={1} title="Note title" content="Note Content"/> */}

      {/* <Footer /> */}
    </div>
  );
}
export default App;

// {notes.map(keepNotes=>{
//     return(
//         <Note
//             key={keepNotes.key}
//             title={keepNotes.title}
//             content={keepNotes.content}
//         />
//     )
//     })}

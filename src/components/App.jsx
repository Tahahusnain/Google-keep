import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../note";
import CreateArea from "./CreateArea";


function App(){ 

   const [listItems, setListItem] = useState([])

   const addNote=(note)=>{
        setListItem(prevNotes =>{
            return[...prevNotes, note]
        })
   }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote} />

            {listItems.map((list,index)=>{
                return(
                    <Note
                        id={index}
                        key={index}
                        title={list.title}
                        content={list.content}
                    />
                )
            })}

            {/* <Note key={1} title="Note title" content="Note Content"/> */}
               
            <Footer/>
            
        </div>
    
)
}
export default App

// {notes.map(keepNotes=>{
//     return(
//         <Note
//             key={keepNotes.key}
//             title={keepNotes.title}
//             content={keepNotes.content}
//         />
//     )
//     })}
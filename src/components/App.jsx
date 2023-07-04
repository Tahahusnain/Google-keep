import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../note";
import CreateArea from "./CreateArea";


function App(){ 

   const [listItems, setListItem] = useState([])

   const addNote=(note)=>{
    console.log(" Note=> ",note);
        setListItem(prevNotes =>{
            return[...prevNotes, note]
        })
   }

 

   const deleteNote=(id)=>{
        setListItem(prevNotes =>{
            return prevNotes.filter((listItems,index)=>{
                return index!==id
            })
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
                        onDelete={deleteNote}
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
import React , { useState } from "react";

export default function CreateArea(props) {

    const [keepNote, setKeepNote] = useState({
        title:"",
        content:""
    })

    const handleChange=(event)=>{
         const {name , value} = event.target
    
        setKeepNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })

    }

    const submitNote=(event)=>{

        props.onAdd(keepNote)
        event.preventDefault()
        setKeepNote({
            title: "",
            content: ""
          });
    }
    

  return (
    <div>
        <form>
            <input onChange={handleChange} name="title" type="text" value={keepNote.title} placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={keepNote.content} placeholder="Take a note..." rows={3} />
            <button onClick={submitNote} >Add</button>
        </form>
    </div>
  )
}

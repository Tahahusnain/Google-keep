import React , { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {

    const [keepNote, setKeepNote] = useState({
        title:"",
        content:""
    })

    const [isExpanded, setExpanded]=useState(false)


    const handleClick=()=>{
        setExpanded(true)
    }

    const handleChange=(event)=>{
         const {name , value} = event.target
    
        setKeepNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })

    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            props.onAdd(keepNote)
            setKeepNote({
                title: "",
                content: ""
              });
        }
      };

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
        <form className="create-note">
                {isExpanded &&  (<input onChange={handleChange} name="title" type="text" value={keepNote.title} placeholder="Title" />)}     

                <textarea onClick={handleClick} onChange={handleChange} name="content" value={keepNote.content} onKeyDown={handleKeyDown} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote} >
                    <AddIcon/>
                </Fab>
            </Zoom>
        </form>
    </div>
  )
}

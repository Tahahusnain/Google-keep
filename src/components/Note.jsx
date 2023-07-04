import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
    const {id,title,content} = props
    console.log("id="+id);
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{
                props.onDelete(id)
            }} 
            ><DeleteIcon/></button>
        </div>
    )
}

export default Note
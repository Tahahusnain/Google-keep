import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";


function App(){ 

    return (
        <div>
            <Header/>
                {notes.map(keepNotes=>{
                    return(
                        <Note
                            key={keepNotes.key}
                            title={keepNotes.title}
                            content={keepNotes.content}
                        />
                    )
                    })}
            <Footer/>
            
        </div>
    
)
}
export default App
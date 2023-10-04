import React from "react";

function Note(props) {

    function handleClick(event) {
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><i class="fa-solid fa-circle-check fa-2xl"></i></button>
        </div>
    );
}
export default Note;
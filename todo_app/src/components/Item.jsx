import React from "react";

const Item = (props)=>{
    
    return (
        <>
            <li className="todo-item">
                <span>{props.completed ? <></> : <input type="checkbox" />}</span>
                <p>{props.text}</p>
                <p>...</p>
            </li>
            
        </>
    )
}

export default Item;
import React, { useState } from 'react';

export default function Players({ name, symbol, isActive }) {
    const [isEditing,setisEditing] = useState(false);
    const [currName, editName] = useState(name);
    
    const handleEditClick = ()=>{
        //setisEditing(isEditing ? false : true) // here setisEditing is a function in which isEditing is an argument.
        setisEditing((isEditing)=>!isEditing);   
    }

    const handleChange = (event)=>{
        editName(event.target.value);
    }

    var playerName= <span className="player-name">{currName}</span>;
    if(isEditing){
        playerName=<input type="text" alt='Player' id="player-name" required value={currName} onChange={handleChange}/>;
    }

    return (
        <li className={isActive ? 'active':undefined}>
            <span className="player-info">                
                {playerName}                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button id="editBtn" onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
        </li>

    )
}
import React from 'react'
import { useState } from 'react'

export default function Player({initialName = 'Player 1', symbol, isActive, onChangeName}) {
    const [ isEditing, setIsEditing ] = useState(false)
    const [ playerName, setPlayerName] = useState(initialName)

    let editablePlayerName = <span className="player-name">{playerName}</span>

    function handleChange(e){
        setPlayerName(e.target.value)
    }

    if (isEditing) {
        editablePlayerName = <input type='text' value={playerName} onChange={handleChange} required/>
    }

    function handleEditClick() {
        setIsEditing((editing) => !editing)
        if (isEditing) {
             onChangeName(symbol, playerName)
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

import React from 'react'

function Character({ personaje }) {
    return (
        <li>
            <img src={personaje.image}/>
            <strong>Nombre:</strong> {personaje.name}
            <strong>Género:</strong> {personaje.gender}
        </li>
    )
}

export default Character
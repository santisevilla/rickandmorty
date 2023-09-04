import React from 'react'
import Character from './Character.js'
import personajeData from '../db/data.js'

const ListCharacters = () => {
  return (
    <div>
        <h2>Lista de personajes Rick and Morty</h2>
        <ul>
            {personajeData.map((personaje) =>(
                <Character key={personaje.id} personaje={personaje}/>    
            ))}
        </ul>
    </div>
  )
}

export default ListCharacters
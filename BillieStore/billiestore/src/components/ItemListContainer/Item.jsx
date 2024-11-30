import React from 'react'

const Item = ({pokemon}) => {
  return (
    <div>
        <h2>{pokemon.name}</h2>
        <p>$ {pokemon.precio}</p>
        <img src={pokemon.img} alt={pokemon.name}/>
        <p>{pokemon.description}</p>
        
    </div>
  )
}

export default Item
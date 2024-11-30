import React from 'react'
import Item from './Item'

const ItemList = ({pokemons}) => {
  return (
    <div>
        <ul>
            <h2>Pokemons</h2>
            {pokemons.map((pokemon) => <Item key={pokemon.name} pokemon={pokemon}/>) }
        </ul>
    </div>
  )
}

export default ItemList
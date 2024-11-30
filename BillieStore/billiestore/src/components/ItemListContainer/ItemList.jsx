import React from 'react'
import Item from './Item'

const ItemList = ({pokemons}) => {
  return (
    <div className='products'>
            <h2>Pokemons</h2>
            <div className='product-grid'>
            {pokemons.map((pokemon) => <Item key={pokemon.name} pokemon={pokemon}/>) }
            </div>
    </div>
  )
}

export default ItemList
import React from 'react'
import Item from './Item'
import { toCapital } from '../Helpers/toCapital'

const ItemList = ({pokemons, titulo}) => {
  return (
    <div className='products'>
            <h2>{toCapital(titulo)}</h2>
            <div className='product-grid'>
            {pokemons.map((pokemon) => <Item key={pokemon.id} pokemon={pokemon}/>) }
            </div>
    </div>
  )
}

export default ItemList
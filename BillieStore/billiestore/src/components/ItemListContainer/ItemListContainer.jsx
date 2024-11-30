import React, { useEffect, useState } from 'react';
import { getPokemon } from '../Helpers/getpokemon';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon()
                .then((res) => {setPokemon(res);
            })
    }, [])
  

    return (
    <div>
        <ItemList pokemons={pokemon}/>
    </div>
  )
}

export default ItemListContainer
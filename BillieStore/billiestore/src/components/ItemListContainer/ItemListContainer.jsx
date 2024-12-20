import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../Helpers/getPokemon';
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const {categoria} = useParams();

    useEffect(() => {
        getPokemon()
                .then((res) => {
                    if (categoria){
                        setPokemon(res.filter((pokemon) => pokemon.categoria === categoria));
                        setTitulo(categoria)
                    }else{
                    setPokemon(res);
                    setTitulo("Pokemons");
                }
            })
    }, [categoria])


    return (
    <div>
        <ItemList pokemons={pokemon} titulo={titulo}/>
    </div>
)
}

export default ItemListContainer
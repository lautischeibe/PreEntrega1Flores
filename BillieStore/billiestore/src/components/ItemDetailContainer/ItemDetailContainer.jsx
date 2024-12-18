import React, { useEffect, useState } from 'react'
import { askForId } from '../Helpers/getPokemon'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({itemId}) {

    const[item, setItem] = useState(null);

    useEffect(() => {
        askForId(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [])

    return (
        <div> 
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
const pokemon =
[
    {
        id: 1,
        name: 'Gengar',
        precio: 5000,
        categoria: 'Fantasma',
        img: '../public/img/Gengar.png',
        stock: 1,
        description: 'Pokemon tipo fantasma/psiquico',
    },
    {
        id: 2,
        name: 'Psyduck',
        precio: 1750,
        categoria: 'Agua',
        img: '../public/img/Psyduck.png',
        stock: 5,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 3,
        name: 'Starmie',
        precio: 3500,
        categoria: 'Agua',
        img: '../public/img/Starmie.png',
        stock: 3,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 4,
        name: 'Raichu',
        precio: 2500,
        categoria: 'Electricidad',
        img: '../public/img/Raichu.png',
        stock: 4,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 5,
        name: 'Vulpix',
        precio: 2750,
        categoria: 'Fuego',
        img: '../public/img/Vulpix.png',
        stock: 6,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 6,
        name: 'Venomoth',
        precio: 10000,
        categoria: 'Bicho',
        img: '../public/img/Venomoth.png',
        stock: 1,
        description: 'Pokemon tipo bicho/veneno',
    },
]

export const getPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemon);
        }, 1500);
    })
}

export const askForId = (id) => {
    return new Promise((resolve, reject) => {
        const item = pokemon.find((el => el.id === id));
        if(item) {
            resolve(item)
        }else{
            reject({
                error: 'No se encontro el pokemon'
            });
        }
    })
}
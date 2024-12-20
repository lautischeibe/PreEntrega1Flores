const pokemon =
[
    {
        id: 1,
        name: 'Gengar',
        precio: 5000,
        categoria: 'Fantasma',
        img: '/img/Gengar.png',
        stock: 2,
        description: 'Pokemon tipo fantasma/psiquico',
    },
    {
        id: 2,
        name: 'Psyduck',
        precio: 1750,
        categoria: 'Agua',
        img: '/img/Psyduck.png',
        stock: 5,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 3,
        name: 'Starmie',
        precio: 3500,
        categoria: 'Agua',
        img: '/img/Starmie.png',
        stock: 3,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 4,
        name: 'Raichu',
        precio: 2500,
        categoria: 'Electrico',
        img: '/img/Raichu.png',
        stock: 4,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 5,
        name: 'Vulpix',
        precio: 2750,
        categoria: 'Fuego',
        img: '/img/Vulpix.png',
        stock: 6,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 6,
        name: 'Venomoth',
        precio: 10000,
        categoria: 'Bicho',
        img: '/img/Venomoth.png',
        stock: 3,
        description: 'Pokemon tipo bicho/veneno',
    },
    {
        id: 7,
        name: 'Alakazam',
        precio: 10000,
        categoria: 'Psiquico',
        img: '/img/Alakazam.png',
        stock: 8,
        description: 'Pokemon tipo psiquico',
    },
    {
        id: 8,
        name: 'Eevee',
        precio: 10000,
        categoria: 'Normal',
        img: '/img/Eevee.png',
        stock: 2,
        description: 'Pokemon tipo normal',
    },
    {
        id: 9,
        name: 'Flareon',
        precio: 10000,
        categoria: 'Fuego',
        img: '/img/Flareon.png',
        stock: 7,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 10,
        name: 'Vaporeon',
        precio: 10000,
        categoria: 'Agua',
        img: '/img/Vaporeon.png',
        stock: 3,
        description: 'Pokemon tipo acuatico',
    },
    {
        id: 11,
        name: 'Jolteon',
        precio: 10000,
        categoria: 'Electrico',
        img: '/img/Jolteon.png',
        stock: 6,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 12,
        name: 'Espeon',
        precio: 10000,
        categoria: 'Psiquico',
        img: '/img/Espeon.png',
        stock: 1,
        description: 'Pokemon tipo psiquico',
    },
    {
        id: 13,
        name: 'Umbreon',
        precio: 10000,
        categoria: 'Oscuro',
        img: '/img/Umbreon.png',
        stock: 3,
        description: 'Pokemon tipo oscuro',
    },
    {
        id: 14,
        name: 'Glaceon',
        precio: 10000,
        categoria: 'Hielo',
        img: '/img/Glaceon.png',
        stock: 5,
        description: 'Pokemon tipo hielo',
    },
    {
        id: 15,
        name: 'Leafeon',
        precio: 10000,
        categoria: 'Planta',
        img: '/img/Leafeon.png',
        stock: 4,
        description: 'Pokemon tipo planta',
    },
]

export const getPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemon);
        }, 3000);
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
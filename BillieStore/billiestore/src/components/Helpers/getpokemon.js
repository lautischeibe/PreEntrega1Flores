const pokemon =
[
    {
        id: 1,
        name: 'Gengar',
        precio: 10000,
        categoria: 'fantasma',
        img: '/img/Gengar.png',
        stock: 2,
        description: 'Pokemon tipo fantasma',
    },
    {
        id: 2,
        name: 'Psyduck',
        precio: 1750,
        categoria: 'agua',
        img: '/img/Psyduck.png',
        stock: 5,
        description: 'Pokemon tipo agua',
    },
    {
        id: 3,
        name: 'Starmie',
        precio: 7500,
        categoria: 'agua',
        img: '/img/Starmie.png',
        stock: 3,
        description: 'Pokemon tipo agua',
    },
    {
        id: 4,
        name: 'Raichu',
        precio: 4500,
        categoria: 'electrico',
        img: '/img/Raichu.png',
        stock: 4,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 5,
        name: 'Vulpix',
        precio: 2750,
        categoria: 'fuego',
        img: '/img/Vulpix.png',
        stock: 6,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 6,
        name: 'Pikachu',
        precio: 3550,
        categoria: 'electrico',
        img: '/img/Pikachu.png',
        stock: 3,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 7,
        name: 'Alakazam',
        precio: 9900,
        categoria: 'psiquico',
        img: '/img/Alakazam.png',
        stock: 8,
        description: 'Pokemon tipo psiquico',
    },
    {
        id: 8,
        name: 'Duskull',
        precio: 6500,
        categoria: 'fantasma',
        img: '/img/Duskull.png',
        stock: 2,
        description: 'Pokemon tipo fantasma',
    },
    {
        id: 9,
        name: 'Flareon',
        precio: 7800,
        categoria: 'fuego',
        img: '/img/Flareon.png',
        stock: 7,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 10,
        name: 'Vaporeon',
        precio: 8500,
        categoria: 'agua',
        img: '/img/Vaporeon.png',
        stock: 3,
        description: 'Pokemon tipo agua',
    },
    {
        id: 11,
        name: 'Jolteon',
        precio: 9200,
        categoria: 'electrico',
        img: '/img/Jolteon.png',
        stock: 6,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 12,
        name: 'Espeon',
        precio: 9900,
        categoria: 'psiquico',
        img: '/img/Espeon.png',
        stock: 1,
        description: 'Pokemon tipo psiquico',
    },
    {
        id: 13,
        name: 'Banette',
        precio: 7700,
        categoria: 'fantasma',
        img: '/img/Banette.png',
        stock: 3,
        description: 'Pokemon tipo fantasma',
    },
    {
        id: 14,
        name: 'Growlithe',
        precio: 5400,
        categoria: 'fuego',
        img: '/img/Growlithe.png',
        stock: 5,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 15,
        name: 'Poliwhirl',
        precio: 5400,
        categoria: 'agua',
        img: '/img/Poliwhirl.png',
        stock: 4,
        description: 'Pokemon tipo agua',
    },
]

export const getPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemon);
        }, 1000);
    })
}

export const askForId = (id) => {
    return new Promise((resolve, reject) => {
        const item = pokemon.find((el) => el.id === id);
        if(item) {
            resolve(item)
        }else{
            reject({
                error: 'No se encontro el pokemon'
            });
        }
    })
}
const pokemon =
[
    {
        id: 1,
        name: 'Gengar',
        precio: 5000,
        categoria: 'Pokemon',
        img: '../public/img/Gengar.png',
        stock: 1,
        description: 'Pokemon tipo fantasma',
    },
    {
        id: 2,
        name: 'Psyduck',
        precio: 1750,
        categoria: 'Pokemon',
        img: '../public/img/Psyduck.png',
        stock: 5,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 3,
        name: 'Starmie',
        precio: 3500,
        categoria: 'Pokemon',
        img: '../public/img/Starmie.png',
        stock: 3,
        description: 'Pokemon tipo agua/psiquico',
    },
    {
        id: 4,
        name: 'Raichu',
        precio: 2500,
        categoria: 'Pokemon',
        img: '../public/img/Raichu.png',
        stock: 4,
        description: 'Pokemon tipo electrico',
    },
    {
        id: 5,
        name: 'Vulpix',
        precio: 2750,
        categoria: 'Pokemon',
        img: '../public/img/Vulpix.png',
        stock: 6,
        description: 'Pokemon tipo fuego',
    },
    {
        id: 6,
        name: 'Venomoth',
        precio: 10000,
        categoria: 'Pokemon',
        img: '../public/img/Venomoth.png',
        stock: 1,
        description: 'Pokemon tipo veneno/volador',
    },
]

export const getPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemon);
        }, 1500);
    })
}

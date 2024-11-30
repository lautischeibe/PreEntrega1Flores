import pokemon from "../Helpers/getpokemon.js";

export const getPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemon);
        }, 2500);
    })
}
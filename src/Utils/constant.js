export const apiUrl = {
 pokemons: 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=50',   
 searchPokemon: (value) => `https://pokeapi.co/api/v2/pokemon/${value}/`,
 detailPokemon: (value) => `https://pokeapi.co/api/v2/pokemon/${value}/`  
}

export const defaultAction = (type, payload) => ({ type, payload });
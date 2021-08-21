import {actionTypes} from './actionTypes'

export const AllPokemon = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEMON_SUCCESS:
          return action.payload;
        case actionTypes.GET_POKEMON_FAILURE:
          return action.payload;
        case actionTypes.LOADING_START:
          return {
            ...state,
            loading: true,
          };
        case actionTypes.LOADING_STOP:
          return {
            ...state,
            loading: false,
          };
        default:
          return state;
      }
}

export const searchPokemon = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_POKEMON_SUCCESS:
          return {data: action.payload}
        case actionTypes.SEARCH_POKEMON_FAILURE:
          return action.payload;
        case actionTypes.LOADING_START:
          return {
            ...state,
            loading: true,
          };
        case actionTypes.LOADING_STOP:
          return {
            ...state,
            loading: false,
          };
        default:
          return state;
      }
}
export const pokemonDetails = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.POKEMON_DETAILS_SUCCESS:
          return action.payload
        case actionTypes.POKEMON_DETAILS_FAILURE:
          return action.payload;
        case actionTypes.LOADING_START:
          return {
            ...state,
            loading: true,
          };
        case actionTypes.LOADING_STOP:
          return {
            ...state,
            loading: false,
          };
        default:
          return state;
      }
}

export const myPokemon = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MY_TEAM_POKEMON:
          return {data: action.payload};
        default:
          return state;
      }
}
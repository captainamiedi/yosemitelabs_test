import { combineReducers } from 'redux';
import {AllPokemon, searchPokemon, myPokemon, pokemonDetails} from './reducer'

const RootReducer = combineReducers({
AllPokemon,
searchPokemon,
myPokemon,
pokemonDetails
})

export default RootReducer;
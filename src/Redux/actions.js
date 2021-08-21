import axios from "axios";
import { apiUrl, defaultAction } from "../Utils/constant";
import { actionTypes } from "./actionTypes";

export const getAllPokemon = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOADING_START,
    });
    const response = await axios.get(apiUrl.pokemons);
    const data = await response.data;
    console.log(response.status);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.LOADING_STOP,
      });
      return dispatch(defaultAction(actionTypes.GET_POKEMON_SUCCESS, data));
    }
    dispatch({
      type: actionTypes.LOADING_STOP,
    });
    return dispatch(defaultAction(actionTypes.GET_POKEMON_FAILURE, data));
  } catch (error) {
    console.log(error, "error");
  }
};

export const searchPokemon = (payload) => async (dispatch) => {
  try {
    // dispatch({
    //     type: actionTypes.LOADING_START
    // })

    const response = await axios.get(apiUrl.searchPokemon(payload));
    const data = await response.data;
    console.log(response.status);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.LOADING_STOP,
      });
      const pokemon = {
        name: data.species.name,
        image: data.sprites.front_default,
      };
      // console.log(data, 'search');
      return dispatch(
        defaultAction(actionTypes.SEARCH_POKEMON_SUCCESS, pokemon)
      );
    }
    dispatch({
      type: actionTypes.LOADING_STOP,
    });
    return dispatch(defaultAction(actionTypes.GET_POKEMON_FAILURE, data));
  } catch (error) {
    console.log(error, "error");
  }
};

export const pokemonDetail = (payload) => async (dispatch) => {
  try {
    dispatch({
        type: actionTypes.LOADING_START
    })

    const response = await axios.get(apiUrl.detailPokemon(payload));
    const data = await response.data;

    if (response.status === 200) {
      dispatch({
        type: actionTypes.LOADING_STOP,
      });
      return dispatch(defaultAction(actionTypes.POKEMON_DETAILS_SUCCESS, data))
    }
    dispatch({
      type: actionTypes.LOADING_STOP,
    });
    return dispatch(defaultAction(actionTypes.POKEMON_DETAILS_FAILURE, data));
  } catch (error) {
    console.log(error, "error");
  }
};

export const myPokemon = (payload) => async (dispatch) => {
  dispatch({
    type: actionTypes.MY_TEAM_POKEMON,
    payload: payload,
  });
};

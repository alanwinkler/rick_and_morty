import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";
export const ERROR = "ERROR";

export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/favs",
        character
      );
      return dispatch({
        type: ADD_FAVORITE,
        payload: response.data, //esto va a ser el arreglo con todos los favs que vienen desde el back
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = axios.delete(
        `http://localhost:3001/rickandmorty/favs/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const filterCards = (genre) => {
  return {
    type: FILTER,
    payload: genre,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/rickandmorty/favs");
      return dispatch({
        type: GET_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

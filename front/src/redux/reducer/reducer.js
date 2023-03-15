import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/action"
const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }
            
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== action.payload)
            }

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.genre !== action.payload)
            }

        case ORDER:
            const sortedCharacters = state.allCharacters;
            if (action.payload === "Ascendente"){
                sortedCharacters.sort((a,b) => a.id - b.id)
            } else {
                sortedCharacters.sort((a,b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: sortedCharacters
            }
        default:
            return {...state};
    }
}

export default rootReducer;
import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FILTER_CHARACTERS
} from "../constants/Page";

const initialState = {
  isFetched: false,
  info: {},
  characters: [],
  displayedCharacters: []
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetched: true
      };

    case RECEIVE_CHARACTERS:
      let characters = action.characters;

      return {
        ...state,
        characters,
        displayedCharacters: characters.slice(0, 60),
        isFetched: false
      };

    case FILTER_CHARACTERS:
      let displayedCharacters = state.characters
        .filter(characters => {
          if (
            characters.name
              .toLowerCase()
              .includes(action.searchTerm.toLowerCase())
          ) {
            return true;
          }

          return false;
        })
        .slice(0, 60);

      return {
        ...state,
        displayedCharacters
      };

    default:
      return state;
  }
}

import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FILTER_CHARACTERS,
  RECEIVE_CHARACTERS_B,
  CHANGE_TO_B,
  CHANGE_TO_A
} from "../constants/Page";

const initialState = {
  isFetched: false,
  info: {},
  characters: [],
  displayedCharacters: [],
  page_b: false
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetched: true
      };

    case RECEIVE_CHARACTERS:
      return {
        ...state,
        info: action.info,
        characters: action.characters,
        displayedCharacters: action.characters.slice(0, 10),
        isFetched: false,
        page_b: false
      };

    case RECEIVE_CHARACTERS_B:
      return {
        ...state,
        info: action.info,
        characters: action.characters,
        displayedCharacters: action.characters.slice(10, 20),
        isFetched: false,
        page_b: true
      };

    case CHANGE_TO_B:
      return {
        ...state,
        page_b: true,
        displayedCharacters: state.characters.slice(10, 20)
      };

    case CHANGE_TO_A:
      return {
        ...state,
        page_b: false,
        displayedCharacters: state.characters.slice(0, 10)
      };

    case FILTER_CHARACTERS:
      return {
        ...state,
        info: action.info,
        characters: action.characters,
        displayedCharacters: action.characters.slice(0, 10),
        isFetched: false,
        page_b: false
      };

    default:
      return state;
  }
}

import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FILTER_CHARACTERS,
  RECEIVE_CHARACTERS_B,
  CHANGE_TO_B,
  CHANGE_TO_A
} from "../constants/Page";

function requestCharacters() {
  return {
    type: REQUEST_CHARACTERS
  };
}

function receiveCharactersB(json) {
  return {
    type: RECEIVE_CHARACTERS_B,
    info: json.info,
    characters: json.results
  };
}

function receiveCharacters(json) {
  return {
    type: RECEIVE_CHARACTERS,
    info: json.info,
    characters: json.results
  };
}

function fetchCharactersBy(fn) {
  return function(pageNumber = "") {
    return dispatch => {
      dispatch(requestCharacters());
      return fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      )
        .then(response => response.json())
        .then(json => dispatch(fn(json)));
    };
  };
}

export const fetchCharacters = fetchCharactersBy(receiveCharacters);
export const fetchCharactersB = fetchCharactersBy(receiveCharactersB);

export function changeToB() {
  return dispatch => {
    dispatch({
      type: CHANGE_TO_B
    });
  };
}

export function changeToA() {
  return dispatch => {
    dispatch({
      type: CHANGE_TO_A
    });
  };
}

// export function fetchCharacters(pageNumber = "") {
//   return dispatch => {
//     dispatch(requestCharacters());
//     return fetch(
//       `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
//     )
//       .then(response => response.json())
//       .then(json => dispatch(receiveCharacters(json)));
//   };
// }

export function filterCharacters(searchTerm) {
  return {
    type: FILTER_CHARACTERS,
    searchTerm
  };
}

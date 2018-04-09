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

const objtextToFilterString = obj => {
  let url = [];

  if (obj.name) url.push(`name=${obj.name}`);

  if (obj.type) url.push(`type=${obj.type}`);

  if (obj.species) url.push(`species=${obj.species}`);

  if (obj.gender) url.push(`gender=${obj.gender}`);

  if (obj.status) url.push(`status=${obj.status}`);

  const reducer = (accumulator, currentValue) =>
    accumulator + "&" + currentValue;

  url = url.reduce(reducer);

  return url;
};

export function filterCharacters(filterObj) {
  const searchUrl = objtextToFilterString(filterObj);
  return dispatch => {
    // dispatch(requestCharacters());
    return fetch(`https://rickandmortyapi.com/api/character/?${searchUrl}`)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: FILTER_CHARACTERS,
          info: json.info,
          characters: json.results
        })
      );
  };

  // fetch(`https://rickandmortyapi.com/api/character/?${searchUrl}`)
  //   .then(response => response.json())
  //   .then(filteredCharacters => {
  //     return {
  //       type: FILTER_CHARACTERS,
  //       info: json.info,
  //       characters: json.results
  //     };
  //   });
}

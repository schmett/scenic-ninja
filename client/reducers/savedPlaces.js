import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {
  case types.SAVE_PLACE:
    for (var i = 0; i < state.length; i++) {
      if (state[i].googlePlaceId === action.place.googlePlaceId) {
        return state;
      }
    }
    return state.concat(action.place);
  default:
    return state;
  },
  switch(action.type) { 
    case types.DELETE_PLACE:
    for (var i = 0; i < state.length; i++) {
      if (state[i].googlePlaceId === action.place.googlePlaceId) {
        return state;
      }
    }
    return state.slice(1, action.place); 
  default:
    return state;
  }
}

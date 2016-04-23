import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {
  case types.SAVE_FRIEND:
    for (var i = 0; i < state.length; i++) {
      if (state[i].googleFriendId === action.friend.googleFriendId) {
        return state;
      }
    }
    return state.concat(action.friend);
  default:
    return state;
  }
}

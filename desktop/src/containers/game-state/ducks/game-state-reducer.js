import { UPDATE_GAMESTATE, CREATE_CHANNEL } from './game-state-actions';

const defaultState = {
  channel: null,
  state: {},
};

function reducer(state = defaultState, action) {
  switch(action.type) {
    case UPDATE_GAMESTATE: {
      return {
        ...state,
        state: action.payload
      };
    }
    case CREATE_CHANNEL: {
      return {
        ...state,
        channel: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
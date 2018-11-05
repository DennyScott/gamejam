import * as Actions from './game-state-actions';

function onMessage(event) {
  return dispatch => {
    dispatch({ type: Actions.ON_MESSAGE });
    dispatch(updateGameState(event.state));
  };
}

function updateGameState(state) {
  return {
    type: Actions.UPDATE_GAMESTATE,
    payload: state,
  };
}

function createChannel(channel) {
  return {
    type: Actions.CREATE_CHANNEL,
    payload: channel,
  };
}

export { onMessage, createChannel };

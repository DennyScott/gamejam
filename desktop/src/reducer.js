import { combineReducers } from 'redux';
import { reducer as gamestate } from './containers/game-state';

const rootReducer = combineReducers({
  gamestate,
});

export default rootReducer;

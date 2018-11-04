import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from './services/local-storage';

const enhancers = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const loadedState = loadState();
const defaultState = loadedState || {};

const configureStore = () => {
  const store = createStore(rootReducer, defaultState, enhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

const store = configureStore();
export default store;
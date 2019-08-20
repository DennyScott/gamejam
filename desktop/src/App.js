import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import { v4 } from 'uuid';
import { subscribeToChannel, unsubscribeToChannel, subscribe } from './services/pubnub';
import { onMessage, createChannel } from './containers/game-state';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

const Loading = (props) => (
  <div>Loading...</div>
);

const Desktop = lazy(() => import('./containers/desktop'));
const LazyDesktop = (props) => (
  <Suspense fallback={<Loading />}><Desktop /></Suspense>
);

function App() {
  const gamestate = useSelector(state => state.gamestate);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if(gamestate.channel) {
        subscribeToChannel(gamestate.channel);
        subscribe(msg => dispatch(onMessage(msg)));
      } else {
        dispatch(createChannel(v4()));
      }
      return () => unsubscribeToChannel();
    },
    [gamestate.channel],
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact name="Home" component={Home} />
        <Route path="/desktop" name="Desktop" component={LazyDesktop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

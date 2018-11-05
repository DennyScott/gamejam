import React, { useRef, useEffect } from 'react';
import QRCode from 'qrcode';

import {} from '../services/pubnub';
import { useMappedState } from 'redux-react-hook';

const mapState = state => ({
  gamestate: state.gamestate,
});

function Home() {
  const { gamestate } = useMappedState(mapState);
  const canvas = useRef(null);

  useEffect(
    () => {
      if (!gamestate.channel) return;
      QRCode.toCanvas(canvas.current, gamestate.channel, err => {
        if (err) console.error(err);
        console.log('success');
      });
    },
    [gamestate.channel],
  );

  return (
    <div className="App">
      <header className="App-header">
        Connect your mobile device by inserting the following number:
        <div>
          <canvas ref={canvas} id="canvas" />
        </div>
      </header>
    </div>
  );
}

export default Home;

import React, { useRef, useEffect } from 'react';
import QRCode from 'qrcode';

import {} from '../services/pubnub';
import { useSelector } from 'react-redux';

function Home() {
  const gamestate = useSelector(state => state.gamestate);
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

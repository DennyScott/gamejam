import React, { Component } from 'react';
import PubNub from 'pubnub';

import './App.css';

function publish(key) {
   
  const pubnub = new PubNub({
      publishKey: process.env.REACT_APP_PUB_KEY,
      subscribeKey: process.env.REACT_APP_SUB_KEY
  })
     
  function publishSampleMessage() {
      console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
      var publishConfig = {
          channel : key,
          message: { 
              title: "greeting",
              description: "hello world!"
          }
      }
      pubnub.publish(publishConfig, function(status, response) {
          console.log(status, response);
      })
  }
     
  pubnub.addListener({
      status: function(statusEvent) {
          if (statusEvent.category === "PNConnectedCategory") {
              publishSampleMessage();
          }
      },
      message: function(msg) {
          console.log(msg.message.title);
          console.log(msg.message.description);
      },
      presence: function(presenceEvent) {
          // handle presence
      }
  })   

  console.log("Subscribing..");
  pubnub.subscribe({
      channels: [key] 
  });
};

class App extends Component {

  
  render() {
    const randomNumber = Math.random().toString().slice(2,11);
    publish(randomNumber);
    return (
      <div className="App">
        <header className="App-header">
          Connect your mobile device by inserting the following number:
          <div>
          {randomNumber}
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;

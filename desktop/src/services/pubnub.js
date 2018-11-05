import PubNub from 'pubnub';

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUB_KEY,
  subscribeKey: process.env.REACT_APP_SUB_KEY,
});

function subscribeToChannel(channel) {
  return new Promise((res, rej) => {
    pubnub.addListener({
      status: event => {
        if (event.category === 'PNConnectedCategory') {
          res(event);
        }
      },
    });

    try {
      pubnub.subscribe({
        channels: [channel],
      });
    } catch (e) {
      rej(e);
    }
  });
}

function publish(channel, action, state) {
  const publishConfig = {
    channel,
    message: {
      action,
      state,
    },
  };
  pubnub.publish(publishConfig);
}

function subscribe(cb) {
  pubnub.addListener({
    message: msg => {
      cb({ action: msg.message.action, state: msg.message.state });
    },
  });
}

function unsubscribeToChannel() {
  pubnub.unsubscribeAll();
}

export { subscribe, publish, subscribeToChannel, unsubscribeToChannel };

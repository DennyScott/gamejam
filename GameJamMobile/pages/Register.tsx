import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PubNub from 'pubnub';
import { BarCodeScanner, Permissions } from 'expo';
import {REACT_APP_PUB_KEY, REACT_APP_SUB_KEY} from '../environment-variables';

function publish(key) {
  
  const pubnub = new PubNub({
     publishKey: REACT_APP_PUB_KEY,
     subscribeKey: REACT_APP_SUB_KEY,
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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
    }

    this.onRegister = this.onRegister.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  onRegister({ type, data }) {
    const { navigate } = this.props.navigation;
    publish(data);
    navigate('Messages');
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.onRegister}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}
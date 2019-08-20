import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PubNub from "pubnub";
import { BarCodeScanner, Permissions } from "expo";
import { REACT_APP_PUB_KEY, REACT_APP_SUB_KEY } from "../environment-variables";

function publish(key) {
  const pubnub = new PubNub({
    publishKey: REACT_APP_PUB_KEY,
    subscribeKey: REACT_APP_SUB_KEY
  });

  function publishSampleMessage() {
    console.log(
      "Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish."
    );
    var publishConfig = {
      channel: key,
      message: {
        title: "greeting",
        description: "hello world!"
      }
    };
    pubnub.publish(publishConfig, function(status, response) {
      console.log(status, response);
    });
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
  });

  console.log("Subscribing..");
  pubnub.subscribe({
    channels: [key]
  });
}

interface HomeScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    const askPhonePermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === "granted");
    };

    askPhonePermission();
  }, []);

  function onRegister({ data }) {
    const { navigate } = this.props.navigation;
    publish(data);
    navigate("Messages");
  }

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={onRegister}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

export default HomeScreen;

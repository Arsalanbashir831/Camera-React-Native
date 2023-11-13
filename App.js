import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.flipButtonContainer}>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text style={styles.flipButtonText}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  flipButtonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  flipButtonText: {
    color: 'black',
  },
});

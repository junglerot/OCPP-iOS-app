// App.js
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    // Simulate a loading process or async task before hiding the splash screen
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image.png')} // Ensure the image path matches your project structure
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3B00', // Red background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 430, // Adjust dimensions as needed
    height: 932,
    resizeMode: 'contain',
  },
});


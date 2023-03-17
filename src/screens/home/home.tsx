import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { FacebookAuthButton } from '@/components/facebook-auth-button';
import { GoogleAuthButton } from '@/components/google-auth-button';

WebBrowser.maybeCompleteAuthSession();

export function Home() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <View style={styles.container}>
      {userInfo === null ? (
        <View style={styles.buttonContainer}>
          <GoogleAuthButton setUserInfo={setUserInfo} />
          <View style={styles.spaceBetweenButtons} />
          <FacebookAuthButton setUserInfo={setUserInfo} />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>{userInfo.name}</Text>
          <Button title="Logout" onPress={() => setUserInfo(null)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spaceBetweenButtons: {
    paddingVertical: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

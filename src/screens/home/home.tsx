import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { GoogleAuthButton } from '@/components';

WebBrowser.maybeCompleteAuthSession();

export function Home() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <View style={styles.container}>
      {userInfo === null ? (
        <GoogleAuthButton setUserInfo={setUserInfo} />
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

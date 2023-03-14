import * as Google from 'expo-auth-session/providers/google';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

import { Constants } from '@/constants';
import { User } from '@/types';

type Props = {
  setUserInfo: (user: User) => void;
};

export function GoogleAuthButton({ setUserInfo }: Props) {
  const [token, setToken] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: Constants.androidClientId,
    iosClientId: Constants.iosClientId,
    webClientId: Constants.webClientId
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]);

  const getUserInfo = async () => {
    const userResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const user = await userResponse.json();
    setUserInfo(user);
  };

  return <Button title="Sign in with Google" disabled={!request} onPress={() => promptAsync()} />;
}

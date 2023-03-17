import * as Facebook from 'expo-auth-session/providers/facebook';
import React, { useEffect } from 'react';
import { Button } from 'react-native';

import { Constants } from '@/constants';
import { User } from '@/types/user';

type Props = {
  setUserInfo: (user: User) => void;
};

export function FacebookAuthButton({ setUserInfo }: Props) {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: Constants.facebookAppID
  });

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUserInfo(userInfo);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== 'success') {
      return;
    }
  };

  return <Button title="Facebook" disabled={!request} onPress={() => handlePressAsync()} />;
}

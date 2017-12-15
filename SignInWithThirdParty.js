import Expo from 'expo';

export async function signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '285994017712-ka0elcjglbibsif70meg4alvmf8gvqch.apps.googleusercontent.com',
        iosClientId: 'YOUR_CLIENT_ID_HERE',
        scopes: ['profile', 'email'],
      });
      

      if (result.type === 'success') {
        return result;
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
}
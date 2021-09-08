import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
// import {util} from 'helpers';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
      SplashScreen.hide();
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Splash);

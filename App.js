import React, {useState} from 'react';

import AppContext from './src/context/index';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import Theme from './src/theme';
import Splash from './src/screens/Splash/SplashScreen';
import Home from './src/screens/Home/Home';

// const test = async () => {
//   const dirs = RNFetchBlob.fs.dirs;
//   const read = await RNFS.readdir(
//     `${RNFS.ExternalStorageDirectoryPath}/Android/media/com.whatsapp/WhatsApp/Media/.Statuses`,
//   );
//   console.log(read);
//   // RNFS.readdir(
//   //   `${RNFS.ExternalStorageDirectoryPath}/Android/media/com.whatsapp/WhatsApp/Media/.Statuses`,
//   // ).then(res => console.log(res[0]));
// };

// test();

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}>
      <ThemeProvider theme={Theme} useDark={false}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerMode: 'none'}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;

import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AppContext from '../../context';

const Home = () => {
  const {loggedIn} = useContext(AppContext);
  return (
    <View>
      <Text>{loggedIn.toString()}</Text>
    </View>
  );
};

export default Home;

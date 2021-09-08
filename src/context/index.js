import {createContext} from 'react';

const AppContext = createContext({
  loggedIn: false,
  setLoggedIn: () => null,
});

export default AppContext;

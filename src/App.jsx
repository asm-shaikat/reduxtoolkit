import React from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import { Provider } from "react-redux";
import  store from './store'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <UserDetails />
      </Provider>
    </>
  );
};

export default App;

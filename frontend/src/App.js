import React, { useReducer, useEffect } from "react";
import Routes from "./components/Routes";
import UserContext from "./UserContext";
import DispatchContext from "./dispatchContext";
import rootReducer from "./reducers/rootReducer";
import Navbar from "./components/Navbar";
import { getUser } from "./actions/userActions";
import YodlrApi from "./YodlrApi"

import './App.css';

function App() {

  const [state, dispatch] = useReducer(
    rootReducer,
    { users: [] }
  );

useEffect(() => {
  async function fetchAllUsers() {
    let users = await YodlrApi.getAllUsers()
    dispatch(getUser(users));
  }
  fetchAllUsers();

}, []);


  return ( 
    <DispatchContext.Provider value={dispatch}>
    <UserContext.Provider value={state.users}>
    <div className="App">
    <Navbar />
    <Routes />
    </div>
  </UserContext.Provider>
  </DispatchContext.Provider>
  );
}
export default App;
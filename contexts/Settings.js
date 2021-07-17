import React, { createContext, useState } from "react";
export const Settings = createContext();

const SettingsProvider = (props) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const [apiUrl, setApiUrl] = useState("http://localhost:3001");
  // const [apiUrl, setApiUrl] = useState("https://quiet-citadel-79746.herokuapp.com");
  const [listOfRecipes, setListOfRecipes] = useState([]);

  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    email: "",
    token: "",
    isLoggedIn: false,
  });
  const [serverIsAwake, setServerIsAwake] = useState(false);

  return (
    <Settings.Provider
      value={{
        apiUrl,
        userCredentials,
        setUserCredentials,
        serverIsAwake,
        setServerIsAwake,
        listOfRecipes,
        setListOfRecipes,
      }}>
      {props.children}
    </Settings.Provider>
  );
};

export default SettingsProvider;

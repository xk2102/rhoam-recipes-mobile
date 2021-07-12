logOutUser = () => {
  console.log("userFunctions.js - logOutUser()");
  return {
    userName: "",
    email: "",
    token: "",
    isLoggedIn: false,
  };
};

exports.logOutUser = logOutUser;

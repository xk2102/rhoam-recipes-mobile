const helloThere = (apiUrl) => {
  console.log("apiCalls.js -> helloThere");
  const fetchPromise = fetch(`${apiUrl}/hellothere`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return fetchPromise;
};

const getListOfRecipes = (apiUrl) => {
  console.log("apiCalls.js -> getListOfRecipes");
  const fetchPromise = fetch(`${apiUrl}/recipes`, {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  return fetchPromise;
};

const logInUser = (apiUrl, credentials_email, credentials_password) => {
  console.log("apiCalls.js -> logInUser");
  const fetchPromise = fetch(`${apiUrl}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: credentials_email,
      password: credentials_password,
    }),
  });
  return fetchPromise;
};

const registerUser = (apiUrl, credentials_userName, credentials_email, credentials_password) => {
  console.log("apiCalls.js -> registerUser");
  const fetchPromise = fetch(`${apiUrl}/users/signup`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: credentials_userName,
      email: credentials_email,
      password: credentials_password,
    }),
  });
  return fetchPromise;
};

const postRecipe = (apiUrl, userCredentials_token, r) => {
  console.log("apiCalls.js -> postRecipe");
  const fetchPromise = fetch(`${apiUrl}/recipes`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userCredentials_token,
    },
    body: JSON.stringify(r),
  });
  return fetchPromise;
};

exports.helloThere = helloThere;
exports.getListOfRecipes = getListOfRecipes;
exports.logInUser = logInUser;
exports.registerUser = registerUser;
exports.postRecipe = postRecipe;

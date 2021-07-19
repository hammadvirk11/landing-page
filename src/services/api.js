import endPoints from "../config/apiConfig";

const platformId = "075fbd22-012c-cc3e-a382-f4147380402f";
//api's for user journey

//signin
export const login = (userCredentials) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": platformId
    },
    body: JSON.stringify(userCredentials),
  };
  const url = endPoints.login();
  return fetch(url, reqObj).then((resp) => resp.json());
};

export const socialLogin = (info) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": platformId
    },
    body: JSON.stringify(info),
  };
  const url = endPoints.socialLogin();
  return fetch(url, reqObj).then((resp) => resp.json());
};

//signup
export const signup = (userInfo) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": platformId
    },
    body: JSON.stringify(userInfo),
  };
  const url = endPoints.signup();
  return fetch(url, reqObj).then((resp) => {
    if (resp.ok || resp.status === 400) return resp.json();
    return Promise.reject(resp);
  });
};

export const authToken = (loginToken) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": loginToken
    },
    body: JSON.stringify({
      "userType": "coseller"
    }),
  };
  const url = endPoints.getAuthToken();
  return fetch(url, reqObj).then((resp) => resp.json());
};

import { login, socialLogin, authToken } from "../../services/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}

export function setAuthToken(authToken) {
  return {
    type: SET_AUTH_TOKEN,
    authToken,
  };
}
export function getUser(userCredentials) {
  return (dispatch) => {
    return login(userCredentials).then((authedUser) => {
      if (authedUser.error == undefined)
        authToken(authedUser.data.token).then((authToken) =>
          dispatch(setAuthToken(authToken))
        );
      dispatch(setAuthedUser(authedUser));
    });
  };
}

export function getUserFromSocialLogin(info) {
  return (dispatch) => {
    return socialLogin(info).then((authedUser) => {
      if (authedUser.error == undefined)
        authToken(authedUser.data.token).then((authToken) =>
          dispatch(setAuthToken(authToken))
        );
      dispatch(setAuthedUser(authedUser));
    });
  };
}
// export function handleLogoutUser() {
//   return (dispatch) => {
//     dispatch(setLoading(true));
//     return logout().then(resp => {
//         //dispatch loading false
//       dispatch(setLoading(false));
//       if(resp.exception === null){
//         dispatch(setAuthedUser(null))
//       }
//     });
//   };
// }

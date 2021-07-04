import { login, socialLogin } from "../../services/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}

export function getUser(userCredentials) {
  return (dispatch) => {
    return login(userCredentials).then((authedUser) => {
      dispatch(setAuthedUser(authedUser));
    });
  };
}

export function getUserFromSocialLogin(info) {
  return (dispatch) => {
    return socialLogin(info).then((authedUser) => {
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

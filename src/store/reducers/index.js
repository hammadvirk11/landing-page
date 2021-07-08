import { combineReducers } from 'redux'
import authedUser from "./authedUser"
import authToken from "./authToken"

export default combineReducers({
    authedUser,
    authToken
})

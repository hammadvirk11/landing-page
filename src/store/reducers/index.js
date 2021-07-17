import { combineReducers } from 'redux'
import authedUser from "./authedUser"
import authToken from "./authToken"
import otherStuff from "./otherStuff"

export default combineReducers({
    authedUser,
    authToken,
    changeState: otherStuff
})

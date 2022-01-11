import { combineReducers } from "redux";
import {login, getAllProfiles, getMyProfiles, signup} from './app.reducer'
const rootReducer = combineReducers({
    login,
    getAllProfiles,
    getMyProfiles,
    signup
})

export default rootReducer;
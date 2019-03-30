import { combineReducers } from "redux"
import city from "./City"
import userInfo from "./UserInfo"
import collect from "./Collect"

const rootReducer = combineReducers({
    city,
    userInfo,
    collect
})
export default rootReducer
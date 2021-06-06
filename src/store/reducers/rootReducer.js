import {combineReducers} from 'redux'

import tasksData from "./reducer";

export default combineReducers({
    tasksData: tasksData
})
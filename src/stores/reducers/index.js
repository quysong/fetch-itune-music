import { combineReducers } from 'redux'
import issueReducer from "../issue/reducer";
import { ISSUE_STORE } from '../issue/constants'

const rootReducer = combineReducers({
  [ISSUE_STORE]: issueReducer,
})
export default rootReducer

import { combineReducers } from 'redux'
import musicReducer from "../music/reducer";
import { MUSIC_STORE } from '../music/constants'

const rootReducer = combineReducers({
  [MUSIC_STORE]: musicReducer,
})
export default rootReducer
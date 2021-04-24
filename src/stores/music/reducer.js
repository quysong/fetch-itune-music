import { MUSIC } from "./constants";
import INITIAL_STATE from './state.js'

const musicReducer = (state = INITIAL_STATE, action) => {
  if (action.type === MUSIC.LOAD_SUCCESS) {
    console.log(`action`, action)
    return { ...state, list: action.payload }
  }
  return state
}
export default musicReducer;
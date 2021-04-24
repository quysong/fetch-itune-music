import { MUSIC } from "./constants";
import INITIAL_STATE from './state.js'

const musicReducer = (state = INITIAL_STATE, action) => {
  if (action.type === MUSIC.LOAD) {
    return { ...state, loading: true }
  }
  if (action.type === MUSIC.LOAD_SUCCESS) {
    return { ...state, loading: false, list: action.results, resultCount: action.resultCount, error: null }
  }
  if (action.type === MUSIC.LOAD_FAIL) {
    return { ...state, loading: false, list: [], resultCount: 0, error: action.error }
  }
  return state
}
export default musicReducer;
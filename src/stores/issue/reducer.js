import { ISSUE } from "./constants";
import INITIAL_STATE from './state.js'

const issueReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ISSUE.LOAD) {
    return { ...state, loading: true }
  }
  if (action.type === ISSUE.LOAD_SUCCESS) {
    return { ...state, loading: false, list: action.results, resultCount: action.resultCount, error: null }
  }
  if (action.type === ISSUE.LOAD_FAIL) {
    return { ...state, loading: false, list: [], resultCount: 0, error: action.error }
  }
  return state
}
export default issueReducer;
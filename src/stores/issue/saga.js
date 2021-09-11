import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { ISSUE } from "./constants";
import { fetchIssueSuccess, fetchIssueFail } from "./action";
import { fetchData } from '../../api/issue';

export function* handleGetIssueLoad(action) {
  try {
    const results = yield call(fetchData, action.payload)
    yield delay(300)
    yield put(fetchIssueSuccess({ resultCount: results.length, results }))
    localStorage.setItem('__store', JSON.stringify(results))
  } catch (error) {
    yield put(fetchIssueFail(error))
  }
}

export default function* watchIssuesLoad() {
  yield takeLatest(ISSUE.LOAD, handleGetIssueLoad)
}
import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { MUSIC } from "./constants";
import { fetchMusicSuccess, fetchMusicFail } from "./action";
import { fetchData } from '../../api/music';

export function* handleGetMusicLoad(action) {
  try {
    const { resultCount, results } = yield call(fetchData, action.payload)
    yield delay(300)
    yield put(fetchMusicSuccess({ resultCount, results }))
  } catch (error) {
    yield put(fetchMusicFail(error))
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(MUSIC.LOAD, handleGetMusicLoad)
}
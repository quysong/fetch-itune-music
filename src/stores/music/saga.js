import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { MUSIC } from "./constants";
import { fetchMusicSuccess, fetchMusicFail } from "./action";

const fetchData = ({ keyword, genre }) => {
  const term = keyword || "all";
  const media = genre || "all";
  return fetch(`https://itunes.apple.com/search?limit=100&term=${term}&media=${media}`).then((res) => res.json())
};

function* handleGetMusicLoad(action) {
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
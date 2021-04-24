import { put, takeLatest } from 'redux-saga/effects'
import { MUSIC } from "./constants";
// import { fetchImages } from "../../api";
import { fetchMusicSuccess, fetchMusicFail } from "./action";

function* handleGetMusicLoad(data) {
  try {
    console.log(`data`, data)
    // yield put(showLoadingPage())
    // const images = yield call(fetchImages, page)
    yield put(fetchMusicSuccess([]))
    // yield put(hideLoadingPage())
  } catch (error) {
    console.log('error', error);
    yield put(fetchMusicFail(error))
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(MUSIC.LOAD, handleGetMusicLoad)
}
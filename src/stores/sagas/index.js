import { all } from 'redux-saga/effects';
import music from '../music/saga';

export default function* rootSaga() {
  yield all([
    music(),
  ])
}
import { all } from 'redux-saga/effects';
import issue from '../issue/saga';

export default function* rootSaga() {
  yield all([
    issue(),
  ])
}
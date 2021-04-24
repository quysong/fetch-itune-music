import { MUSIC } from "./constants";

const fetchMusicRequest = payload => ({
  type: MUSIC.LOAD,
  payload,
})
const fetchMusicSuccess = ({resultCount, results}) => ({
  type: MUSIC.LOAD_SUCCESS,
  resultCount,
  results,
})

const fetchMusicFail = error => ({
  type: MUSIC.LOAD_FAIL,
  error
})
export {
  fetchMusicRequest,
  fetchMusicSuccess,
  fetchMusicFail
}
import { MUSIC } from "./constants";

const fetchMusicRequest = payload => ({
  type: MUSIC.LOAD,
  payload,
})
const fetchMusicSuccess = payload => ({
  type: MUSIC.LOAD_SUCCESS,
  payload
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
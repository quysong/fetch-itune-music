import { ISSUE } from "./constants";

const fetchIssueRequest = payload => ({
  type: ISSUE.LOAD,
  payload,
})
const fetchIssueSuccess = ({resultCount, results}) => ({
  type: ISSUE.LOAD_SUCCESS,
  resultCount,
  results,
})

const fetchIssueFail = error => ({
  type: ISSUE.LOAD_FAIL,
  error
})
export {
  fetchIssueRequest,
  fetchIssueSuccess,
  fetchIssueFail
}
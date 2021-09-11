import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { ISSUE } from '../../stores/issue/constants';
import { fetchData } from '../../api/issue';

const filter = {
  keyword: 'abce',
  genre: 'podcast',
}

describe('Page test', function () {
  it('ISSUE_LOAD', () => {
    function* issueSaga() {
      const action = yield take(ISSUE.LOAD);
      const results = yield call(fetchData, action.payload);

      yield put({ type: ISSUE.LOAD_SUCCESS, payload: { resultCount: results.length, results } });
    }

    return expectSaga(issueSaga)
      .put({
        type: ISSUE.LOAD_SUCCESS,
        payload: [
          {
            "url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/3",
            "repository_url": "https://api.github.com/repos/nnluukhtn/employment_bot",
            "labels_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/3/labels{/name}",
            "comments_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/3/comments",
            "events_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/3/events",
            "html_url": "https://github.com/nnluukhtn/employment_bot/issues/3",
            "id": 403433588,
            "node_id": "MDU6SXNzdWU0MDM0MzM1ODg=",
            "number": 3,
            "title": "Refactor codes",
            "user": {
              "login": "nnluukhtn",
              "id": 5663098,
              "node_id": "MDQ6VXNlcjU2NjMwOTg=",
              "avatar_url": "https://avatars.githubusercontent.com/u/5663098?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/nnluukhtn",
              "html_url": "https://github.com/nnluukhtn",
              "followers_url": "https://api.github.com/users/nnluukhtn/followers",
              "following_url": "https://api.github.com/users/nnluukhtn/following{/other_user}",
              "gists_url": "https://api.github.com/users/nnluukhtn/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/nnluukhtn/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/nnluukhtn/subscriptions",
              "organizations_url": "https://api.github.com/users/nnluukhtn/orgs",
              "repos_url": "https://api.github.com/users/nnluukhtn/repos",
              "events_url": "https://api.github.com/users/nnluukhtn/events{/privacy}",
              "received_events_url": "https://api.github.com/users/nnluukhtn/received_events",
              "type": "User",
              "site_admin": false
            },
            "labels": [
              {
                "id": 1208953431,
                "node_id": "MDU6TGFiZWwxMjA4OTUzNDMx",
                "url": "https://api.github.com/repos/nnluukhtn/employment_bot/labels/help%20wanted",
                "name": "help wanted",
                "color": "008672",
                "default": true,
                "description": "Extra attention is needed"
              }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [
        
            ],
            "milestone": null,
            "comments": 1,
            "created_at": "2019-01-26T11:38:08Z",
            "updated_at": "2019-02-02T05:28:42Z",
            "closed_at": null,
            "author_association": "OWNER",
            "active_lock_reason": null,
            "body": "The codes now is not clean and not well designed. Please consider refactoring 🙇 ",
            "performed_via_github_app": null
          },
          {
            "url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/2",
            "repository_url": "https://api.github.com/repos/nnluukhtn/employment_bot",
            "labels_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/2/labels{/name}",
            "comments_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/2/comments",
            "events_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/2/events",
            "html_url": "https://github.com/nnluukhtn/employment_bot/issues/2",
            "id": 403433541,
            "node_id": "MDU6SXNzdWU0MDM0MzM1NDE=",
            "number": 2,
            "title": "Add more tests",
            "user": {
              "login": "nnluukhtn",
              "id": 5663098,
              "node_id": "MDQ6VXNlcjU2NjMwOTg=",
              "avatar_url": "https://avatars.githubusercontent.com/u/5663098?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/nnluukhtn",
              "html_url": "https://github.com/nnluukhtn",
              "followers_url": "https://api.github.com/users/nnluukhtn/followers",
              "following_url": "https://api.github.com/users/nnluukhtn/following{/other_user}",
              "gists_url": "https://api.github.com/users/nnluukhtn/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/nnluukhtn/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/nnluukhtn/subscriptions",
              "organizations_url": "https://api.github.com/users/nnluukhtn/orgs",
              "repos_url": "https://api.github.com/users/nnluukhtn/repos",
              "events_url": "https://api.github.com/users/nnluukhtn/events{/privacy}",
              "received_events_url": "https://api.github.com/users/nnluukhtn/received_events",
              "type": "User",
              "site_admin": false
            },
            "labels": [
              {
                "id": 1208953430,
                "node_id": "MDU6TGFiZWwxMjA4OTUzNDMw",
                "url": "https://api.github.com/repos/nnluukhtn/employment_bot/labels/enhancement",
                "name": "enhancement",
                "color": "a2eeef",
                "default": true,
                "description": "New feature or request"
              }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [
        
            ],
            "milestone": null,
            "comments": 0,
            "created_at": "2019-01-26T11:37:28Z",
            "updated_at": "2019-01-26T11:44:50Z",
            "closed_at": null,
            "author_association": "OWNER",
            "active_lock_reason": null,
            "body": "There is no test as of now. We might want to update our tests to improve coverage 🌕 ",
            "performed_via_github_app": null
          },
          {
            "url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/1",
            "repository_url": "https://api.github.com/repos/nnluukhtn/employment_bot",
            "labels_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/1/labels{/name}",
            "comments_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/1/comments",
            "events_url": "https://api.github.com/repos/nnluukhtn/employment_bot/issues/1/events",
            "html_url": "https://github.com/nnluukhtn/employment_bot/issues/1",
            "id": 403433426,
            "node_id": "MDU6SXNzdWU0MDM0MzM0MjY=",
            "number": 1,
            "title": "Update README",
            "user": {
              "login": "nnluukhtn",
              "id": 5663098,
              "node_id": "MDQ6VXNlcjU2NjMwOTg=",
              "avatar_url": "https://avatars.githubusercontent.com/u/5663098?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/nnluukhtn",
              "html_url": "https://github.com/nnluukhtn",
              "followers_url": "https://api.github.com/users/nnluukhtn/followers",
              "following_url": "https://api.github.com/users/nnluukhtn/following{/other_user}",
              "gists_url": "https://api.github.com/users/nnluukhtn/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/nnluukhtn/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/nnluukhtn/subscriptions",
              "organizations_url": "https://api.github.com/users/nnluukhtn/orgs",
              "repos_url": "https://api.github.com/users/nnluukhtn/repos",
              "events_url": "https://api.github.com/users/nnluukhtn/events{/privacy}",
              "received_events_url": "https://api.github.com/users/nnluukhtn/received_events",
              "type": "User",
              "site_admin": false
            },
            "labels": [
              {
                "id": 1208953430,
                "node_id": "MDU6TGFiZWwxMjA4OTUzNDMw",
                "url": "https://api.github.com/repos/nnluukhtn/employment_bot/labels/enhancement",
                "name": "enhancement",
                "color": "a2eeef",
                "default": true,
                "description": "New feature or request"
              }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [
        
            ],
            "milestone": null,
            "comments": 0,
            "created_at": "2019-01-26T11:36:12Z",
            "updated_at": "2019-01-26T11:45:02Z",
            "closed_at": null,
            "author_association": "OWNER",
            "active_lock_reason": null,
            "body": "We need a better README instead of current dummy version 🤔 ",
            "performed_via_github_app": null
          }
        ],
      })
      .dispatch({ type: ISSUE.LOAD, payload: filter })
      .run();
  });
})



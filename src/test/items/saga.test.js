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
      const { resultCount, results } = yield call(fetchData, action.payload);

      yield put({ type: ISSUE.LOAD_SUCCESS, payload: { resultCount, results } });
    }

    return expectSaga(issueSaga)
      .put({
        type: ISSUE.LOAD_SUCCESS,
        payload: {
          "resultCount": 2,
          "results": [
            {
              "wrapperType": "track",
              "kind": "podcast",
              "collectionId": 1549484210,
              "trackId": 1549484210,
              "artistName": "Ernesto Bulas",
              "collectionName": "El Abcé Del Emprendedor",
              "trackName": "El Abcé Del Emprendedor",
              "collectionCensoredName": "El Abcé Del Emprendedor",
              "trackCensoredName": "El Abcé Del Emprendedor",
              "collectionViewUrl": "https://podcasts.apple.com/us/podcast/el-abc%C3%A9-del-emprendedor/id1549484210?uo=4",
              "feedUrl": "https://anchor.fm/s/47f2073c/podcast/rss",
              "trackViewUrl": "https://podcasts.apple.com/us/podcast/el-abc%C3%A9-del-emprendedor/id1549484210?uo=4",
              "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/95/c9/17/95c91781-455a-ba51-4330-321b676708e9/mza_14615660399714612222.jpg/30x30bb.jpg",
              "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/95/c9/17/95c91781-455a-ba51-4330-321b676708e9/mza_14615660399714612222.jpg/60x60bb.jpg",
              "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/95/c9/17/95c91781-455a-ba51-4330-321b676708e9/mza_14615660399714612222.jpg/100x100bb.jpg",
              "collectionPrice": 0.00,
              "trackPrice": 0.00,
              "trackRentalPrice": 0,
              "collectionHdPrice": 0,
              "trackHdPrice": 0,
              "trackHdRentalPrice": 0,
              "releaseDate": "2021-01-29T00:09:00Z",
              "collectionExplicitness": "cleaned",
              "trackExplicitness": "cleaned",
              "trackCount": 6,
              "country": "USA",
              "currency": "USD",
              "primaryGenreName": "Marketing",
              "contentAdvisoryRating": "Clean",
              "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/95/c9/17/95c91781-455a-ba51-4330-321b676708e9/mza_14615660399714612222.jpg/600x600bb.jpg",
              "genreIds": [
                "1492",
                "26",
                "1321"
              ],
              "genres": [
                "Marketing",
                "Podcasts",
                "Business"
              ]
            },
            {
              "wrapperType": "track",
              "kind": "podcast",
              "collectionId": 1539127952,
              "trackId": 1539127952,
              "artistName": "Delia Smith",
              "collectionName": "Abce/Hijl",
              "trackName": "Abce/Hijl",
              "collectionCensoredName": "Abce/Hijl",
              "trackCensoredName": "Abce/Hijl",
              "collectionViewUrl": "https://podcasts.apple.com/us/podcast/abce-hijl/id1539127952?uo=4",
              "feedUrl": "https://anchor.fm/s/3eb7602c/podcast/rss",
              "trackViewUrl": "https://podcasts.apple.com/us/podcast/abce-hijl/id1539127952?uo=4",
              "artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts114/v4/0f/7d/3e/0f7d3e74-203d-75bb-4939-53a79ca17312/mza_3590714825657351617.jpg/30x30bb.jpg",
              "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts114/v4/0f/7d/3e/0f7d3e74-203d-75bb-4939-53a79ca17312/mza_3590714825657351617.jpg/60x60bb.jpg",
              "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts114/v4/0f/7d/3e/0f7d3e74-203d-75bb-4939-53a79ca17312/mza_3590714825657351617.jpg/100x100bb.jpg",
              "collectionPrice": 0.00,
              "trackPrice": 0.00,
              "trackRentalPrice": 0,
              "collectionHdPrice": 0,
              "trackHdPrice": 0,
              "trackHdRentalPrice": 0,
              "releaseDate": "2021-04-23T21:37:00Z",
              "collectionExplicitness": "cleaned",
              "trackExplicitness": "cleaned",
              "trackCount": 15,
              "country": "USA",
              "currency": "USD",
              "primaryGenreName": "Books",
              "contentAdvisoryRating": "Clean",
              "artworkUrl600": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts114/v4/0f/7d/3e/0f7d3e74-203d-75bb-4939-53a79ca17312/mza_3590714825657351617.jpg/600x600bb.jpg",
              "genreIds": [
                "1482",
                "26",
                "1301"
              ],
              "genres": [
                "Books",
                "Podcasts",
                "Arts"
              ]
            }
          ]
        },
      })
      .dispatch({ type: ISSUE.LOAD, payload: filter })
      .run();
  });
})



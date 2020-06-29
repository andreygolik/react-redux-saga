import { takeEvery, put, call } from 'redux-saga/effects';

import { REQUEST_POSTS, FETCH_POSTS } from './types';
import { showLoader, hideLoader, showAlert } from './actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    yield put(showAlert('Something went wrong...'));
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  await new Promise(resolve => setTimeout(() => resolve(), 1000)); // simulating response delay
  return await response.json();
}

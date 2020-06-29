import { CREATE_POST, REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from './types';

export const createPost = post => ({
  type: CREATE_POST,
  payload: post,
});

export const hideLoader = () => ({ type: HIDE_LOADER });

export const showLoader = () => ({ type: SHOW_LOADER });

export const hideAlert = () => ({ type: HIDE_ALERT });

export const showAlert = text => {
  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const fetchPosts = () => ({ type: REQUEST_POSTS });

// export const fetchPosts = () => async dispatch => {
//   try {
//     dispatch(showLoader());
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//     const json = await response.json();
//     await new Promise(resolve => setTimeout(() => resolve(), 1000)); // simulating response delay
//     dispatch(hideLoader());
//     dispatch({ type: FETCH_POSTS, payload: json });
//   } catch (e) {
//     dispatch(hideLoader());
//     dispatch(showAlert('Something went wrong...'))
//   }
// };

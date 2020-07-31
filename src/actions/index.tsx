import jsonPlaceholder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch: any, getState: any) => {
  await dispatch(fetchPosts());
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => {
    dispatch(fetchUser(id))
  });
};

export const fetchPosts = () => async (dispatch:any) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id: number) => async (dispatch: any) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = (id: number) => (dispatch: any) => _fetchUser(id, dispatch);
// const _fetchUser =_.memoize(async (id: number, dispatch: any) => { 
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// });
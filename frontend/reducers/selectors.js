import values from 'lodash/values';

export const selectAllPhotos = state => values(state.entities.photos);

export const selectAllUsers = state => values(state.entities.users);
export const selectUser = state => values(state.entities.user);

export const selectPhotoLikes = (state, photo) => {
  return photo ? photo.likes_by_id.map(id => state.entities.likes[id]) : [];
};

export const selectPhotoLike = (state, id) => {
  return state.entities.likes[id];
};

export const selectPhotoComments = (state, photo) => {
  return photo ? photo.comments_by_id.map(id =>
    state.entities.comments[id]) : [];
};

export const selectPhotoComment = (state, id) => {
  return state.entities.comments[id];
};

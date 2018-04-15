import * as APIUtil from '../utils/photo_utils';

export const RECEIVE_FEED_PHOTOS = 'RECEIVE_FEED_PHOTOS';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const START_LOADING_FEED_PHOTOS = 'START_LOADING_FEED_PHOTOS';
export const START_LOADING_SINGLE_PHOTO = 'START_LOADING_SINGLE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

export const receiveFeedPhotos = payload => ({
  type: RECEIVE_FEED_PHOTOS,
  payload
});

export const clearPhotos = () => ({
  type: CLEAR_PHOTOS
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const startLoadingFeedPhotos = () => ({
  type: START_LOADING_FEED_PHOTOS
});

export const startLoadingSinglePhoto = () => ({
  type: START_LOADING_SINGLE_PHOTO
});

export const fetchFeedPhotos = pageId => dispatch => {
  dispatch(startLoadingFeedPhotos());
  return APIUtil.fetchFeedPhotos(pageId)
    .then(photos => dispatch(receiveFeedPhotos(photos)));
};

export const deletePhotos = () => dispatch => {
  dispatch(clearPhotos());
};

export const fetchPhoto = id => dispatch => {
  dispatch(startLoadingSinglePhoto());
  APIUtil.fetchPhotos(id)
    .then(photo => dispatch(receivePhoto(photo)));
};

export const createPhoto = inputPhoto => dispatch => (
  APIUtil.createPhoto(inputPhoto)
    .then(photo => dispatch(receivePhoto(photo)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updatePhoto = inputPhoto => dispatch => (
  APIUtil.updatePhoto(inputPhoto)
    .then(photo => dispatch(receivePhoto(photo)))
    .catch(err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deletePhoto = id => dispatch => (
  APIUtil.deletePhoto(id)
    .then(photo => dispatch(removePhoto(id)))
);

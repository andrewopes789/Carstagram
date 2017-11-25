import { retrieveProfilePhotos,
  retrieveFeedPhotos } from '../utils/photo_utils';

export const RECEIVE_PROFILE_PHOTOS = 'RECEIVE_PROFILE_PHOTOS';
export const RECEIVE_FEED_PHOTOS = 'RECEIVE_FEED_PHOTOS';

export const receiveProfilePhotos = photos => ({
  type: RECEIVE_PROFILE_PHOTOS,
  photos
});

export const receiveFeedPhotos = photos => ({
  type: RECEIVE_FEED_PHOTOS,
  photos
});

export const fetchProfilePhotos = () => dispatch => (
  retrieveProfilePhotos()
    .then(photos => dispatch(receiveProfilePhotos(photos)))
);

export const fetchFeedPhotos = () => dispatch => (
  retrieveFeedPhotos()
    .then(photos => dispatch(receiveFeedPhotos(photos)))
);

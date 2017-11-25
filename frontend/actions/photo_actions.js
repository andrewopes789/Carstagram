import { retrieveFeedPhotos } from '../utils/photo_utils';

export const RECEIVE_FEED_PHOTOS = 'RECEIVE_FEED_PHOTOS';

export const receiveFeedPhotos = photos => ({
  type: RECEIVE_FEED_PHOTOS,
  photos
});

export const fetchFeedPhotos = () => dispatch => (
  retrieveFeedPhotos()
    .then(photos => dispatch(receiveFeedPhotos(photos)))
);

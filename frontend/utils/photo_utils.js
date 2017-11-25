export const retrieveFeedPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

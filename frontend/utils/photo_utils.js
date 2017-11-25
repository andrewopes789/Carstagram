export const retrieveProfilePhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos/?profile=true'
  })
);

export const retrieveFeedPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

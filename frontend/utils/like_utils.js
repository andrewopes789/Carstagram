export const fetchLikes = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/${photoId}/likes`
  })
);

export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  })
);

export const deleteLike = likeId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${likeId}`
  })
);

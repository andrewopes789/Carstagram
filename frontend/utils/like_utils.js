export const fetchLikes = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/likes`
  })
);

export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: `/api/photos/${like.photo_id}/likes`,
    data: { like }
  })
);

export const deleteLike = likeId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${likeId}`
  })
);

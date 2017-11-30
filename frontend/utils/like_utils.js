export const fetchLikes = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/likes`
  })
);

export const createLike = photoId => (
  $.ajax({
    method: 'POST',
    url: `/api/photos/${photoId}/like`,
    data: { photoId }
  })
);

export const deleteLike = photoId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${photoId}/like`
  })
);

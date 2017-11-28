export const fetchFollows = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}/follows`
  })
);

export const createFollow= follow => (
  $.ajax({
    method: 'POST',
    url: `/api/photos/${follow.photo_id}/follow`,
    data: { follow }
  })
);

export const deleteFollow = followId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followId}`
  })
);

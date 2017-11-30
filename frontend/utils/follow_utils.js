export const createFollow = followingId => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${followingId}/follow`,
    data: { followingId }
  })
);

export const deleteFollow = followingId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${followingId}/follow`
  })
);

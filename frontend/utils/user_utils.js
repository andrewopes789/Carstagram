export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const fetchUsers = pageId => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { pageId }
  })
);

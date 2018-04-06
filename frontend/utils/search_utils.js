export const searchDB = query => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: { query }
  })
);

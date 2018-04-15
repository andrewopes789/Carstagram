export const fetchRecommendations = pageId => (
  $.ajax({
    method: 'GET',
    url: '/api/recommendations',
    data: { pageId }
  })
);

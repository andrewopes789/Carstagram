export const fetchComments = photoId => (
  $.ajax({
    method: 'GET',
    url: `/api/${photoId}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
);

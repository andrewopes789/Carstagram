json.partial! 'photo', photo: @photo

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end

json.likes do
  @photo.likes.each do |like|
    json.partial! '/api/likes/like', like: like
  end
end

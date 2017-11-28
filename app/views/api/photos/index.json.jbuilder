json.photos do
  @photos.each do |photo|
    json.partial! 'photo', photo: photo
  end
end

json.comments do
  @photos.each do |photo|
    photo.comments.each do |comment|
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end

json.likes do
  @photos.each do |photo|
    photo.likes.each do |like|
      json.partial! '/api/likes/like', like: like
    end
  end
end

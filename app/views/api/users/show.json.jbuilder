json.user do
  json.extract! @user, :id, :username, :email, :img_url, :photos_by_id,
  :followings_by_id, :followers_by_id
  json.followed @user.followers_by_id.include?(current_user.id)
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! '/api/photos/photo', photo: photo
    end
  end
end

json.likes do
  @user.photos.each do |photo|
    photo.likes.each do |like|
      json.partial! '/api/likes/like', like: like
    end
  end
end

json.comments do
  @user.photos.each do |photo|
    photo.comments.each do |comment|
      json.set! comment.id do
        json.partial! '/api/comments/comment', comment: comment
      end
    end
  end
end

json.follows do
end

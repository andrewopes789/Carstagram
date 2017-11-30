json.user do
  json.extract! user, :id, :username, :email, :img_url
  json.photos_by_id user.photos.map(&:id)
  json.followings_by_id user.user_followings.map(&:id)
  json.followers_by_id user.user_followers.map(&:id)
  json.followed user.followers.map(&:id).include?(current_user.id)
end

json.photos do
  user.photos.each do |photo|
    json.partial! '/api/photos/photo.json.jbuilder', photo: photo
  end
end

json.likes do
  user.photos.each do |photo|
    photo.likes.each do |like|
      json.partial! '/api/likes/like.json.jbuilder', like: like
    end
  end
end

json.comments do
  user.photos.each do |photo|
    photo.comments.each do |comment|
      json.partial! '/api/comments/comment.json.jbuilder', comment: comment
    end
  end
end

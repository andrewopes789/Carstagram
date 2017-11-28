json.user do
  json.extract! user, :id, :username, :email, :img_url, :photos_by_id,
  :followings_by_id, :followers_by_id
  json.followed user.followers_by_id.include?(current_user.id)
end

json.photos do
  user.photos.each do |photo|
    json.partial! '/api/photos/photo.json.jbuilder', photo: photo
  end
end

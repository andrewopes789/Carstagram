json.set! user.id do
  json.id user.id
  json.username user.username
  json.email user.email
  json.img_url user.img_url
  json.photos_by_id user.photos_by_id
  json.followings_by_id user.followings_by_id
  json.followers_by_id user.followers_by_id
  json.followed user.followers_by_id.include?(current_user.id)
end

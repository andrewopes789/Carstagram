json.set! user.id do
  json.id user.id
  json.username user.username
  json.email user.email
  json.img_url user.img_url
  json.photos_by_id user.photos.map(&:id)
  json.followings_by_id user.user_followings.map(&:id)
  json.followers_by_id user.user_followers.map(&:id)
  json.followed user.followers.map(&:id).include?(current_user.id)
end

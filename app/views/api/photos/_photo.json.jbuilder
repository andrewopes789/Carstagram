json.set! photo.id do
  json.id photo.id
  json.img_url photo.img_url
  json.caption photo.caption
  json.poster_id photo.author_id
  json.poster_username photo.poster.username
  json.poster_img photo.poster.img_url
  json.likes_by_id photo.likes_by_id
  json.comments_by_id photo.comments_by_id
  json.current_user_likes photo.likers.include?(current_user)
  json.age time_ago_in_words(photo.created_at)
end

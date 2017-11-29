json.set! like.id do
  json.id like.id
  json.liker_id like.user_id
  json.photo_id like.photo_id
  json.liker_username like.liker.username
end

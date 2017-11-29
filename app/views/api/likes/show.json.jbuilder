
json.like do
  json.partial! '/api/likes/like', like: @like
end

json.photo do
  json.partial! 'api/photos/photo', photo: @like.photo
end

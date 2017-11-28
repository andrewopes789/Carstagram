json.user do
  json.partial! 'api/users/user', user: @user
end

json.photos do
  @user.photos.each do |photo|
    json.partial! '/api/photos/photo', photo: photo
  end
end

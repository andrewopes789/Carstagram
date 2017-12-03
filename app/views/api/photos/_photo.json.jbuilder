url = photo.img_url
url = url.sub('res.cloudinary.com/dn26kjpum/image/upload/','res.cloudinary.com/dn26kjpum/image/upload/c_thumb,h_600,w_800/')

json.id photo.id
json.img_url url
json.caption photo.caption
json.poster_id photo.author_id
json.poster_username photo.poster.username
json.poster_img photo.poster.img_url
json.likes_by_id photo.likes_by_id
json.comments_by_id photo.comments_by_id
json.current_user_likes photo.likers.include?(current_user)
json.age time_ago_in_words(photo.created_at)

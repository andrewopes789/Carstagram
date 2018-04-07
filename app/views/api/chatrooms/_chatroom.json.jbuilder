json.id chatroom.id
json.member1_id chatroom.members.map(&:id)[0]
json.member2_id chatroom.members.map(&:id)[1]
json.member1_username chatroom.members.map(&:username)[0]
json.member2_username chatroom.members.map(&:username)[1]
json.member1_img chatroom.members.map(&:img_url)[0]
json.member2_img chatroom.members.map(&:img_url)[1]
json.last_message_time chatroom.messages.map(&:created_at).last

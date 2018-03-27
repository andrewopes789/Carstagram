@chatroom_memberships.each do |membership|
  json.set! membership.id do
    json.partial! 'chatroom_membership', chatroom_membership: membership
  end
end

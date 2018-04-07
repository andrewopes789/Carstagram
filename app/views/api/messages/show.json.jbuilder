json.message do
  json.partial! 'message', message: @message
end

json.chatroom do
  json.partial! '/api/chatrooms/chatroom', chatroom: @chatroom
end

json.chatroom do
  json.partial! 'chatroom', chatroom: @chatroom
end

json.messages do  
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end

class MessageRelayJob < ApplicationJob
  def perform(message)
    id = message.chatroom_id
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    ActionCable.server.broadcast("channel_#{id}",
                                 message: JSON.parse(message))
  end
end

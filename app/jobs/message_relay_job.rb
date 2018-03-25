class MessageRelayJob < ApplicationJob
  def perform(message, interface)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )

    # user_json = Api::UsersController.render(
    #   partial: 'api/users/user',
    #   locals: { user: message.user }
    # )

    ActionCable.server.broadcast("channel_#{interface.channel_id}",
                                 message: JSON.parse(message))
  end
end

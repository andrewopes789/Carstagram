class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    chatrooms = current_user.sent_chatrooms + current_user.received_chatrooms
    chatrooms.each do |chatroom|
      stream_from "channel_#{chatroom.id}"
    end
  end

  # def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  # end
  #
  # def speak
  # end
end

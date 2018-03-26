class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    memberships = current_user.chatroom_memberships.reload
    memberships.each do |membership|
      stream_from "channel_#{membership.chatroom_id}"
    end
  end

  def add_stream(params)
    puts "ADDING STREAM: #{params['id']}"
    stream_from "channel_#{params['id']}"
  end

end

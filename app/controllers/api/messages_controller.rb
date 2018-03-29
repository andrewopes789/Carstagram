class Api::MessagesController < ApplicationController
  before_action :require_signed_in!

  def show
    @message = Message.find(params[:id])
  end

  def create
    @chatroom = nil

    p params[:chatroom_id]
    p params[:id]

    if @chatroom.nil?
      user = User.find(params[:recipient_id])
      current_user.chatrooms.each do |chatroom|
        if chatroom.members.include?(user)
          @chatroom = chatroom
          return
        end
      end
    end

    if @chatroom.nil?
      @chatroom = Chatroom.new
      if @chatroom.save
        ChatroomMembership.new(chatroom_id: @chatroom.id,
                               member_id: current_user.id).save
        ChatroomMembership.new(chatroom_id: @chatroom.id,
                               member_id: params[:recipient_id]).save
      end
    end

    @message = Message.new(
      chatroom_id: @chatroom.id,
      sender_id: current_user.id,
      recipient_id: message_params[:recipient_id],
      body: message_params[:body]
    )

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatroom_id, :recipient_id)
  end
end

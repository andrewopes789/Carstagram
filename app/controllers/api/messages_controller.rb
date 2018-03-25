class Api::MessagesController < ApplicationController
  before_action :require_signed_in!

  def show
    @message = Message.find(params[:id])
  end

  def create
    @chatroom = Chatroom.find(params[:chatroom_id])
    sender_id = current_user.id
    recipient_id =
      if @chatroom.sender_id == sender_id
        @chatroom.recipient_id
      else
        @chatroom.sender_id
      end

    @message = Message.new(
      chatroom_id: message_params[:chatroom_id],
      sender_id: sender_id,
      recipient_id: recipient_id,
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
    params.require(:message).permit(:body, :chatroom_id)
  end
end

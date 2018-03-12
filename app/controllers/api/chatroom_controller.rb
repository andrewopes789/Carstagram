class Api::ChatroomController < ApplicationController
  before_action :require_signed_in!
  def index
    @chatrooms = current_user.sent_chatroom + current_user.received_chatrooms
  end

  def create
    if Chatroom.between(params[:sender_id], params[:recipient_id]).present?
      @chatroom = Chatroom.between(params[:sender_id],
                                   params[:recipient_id]).first
    elsif Chatroom.between(params[:recipient_id],
                           params[:sender_id]).present?
      @chatroom = Chatroom.between(params[:recipient_id],
                                   params[:sender_id]).first
    else
      @chatroom = Chatroom.new(chatroom_params)

      if @chatroom.save
        render :show
      else
        render json: @chatroom.errors.full_messages
      end
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:sender_id, :recipient_id)
  end
end

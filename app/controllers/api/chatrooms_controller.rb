class Api::ChatroomsController < ApplicationController
  before_action :require_signed_in!
  def index
    @chatrooms = current_user.sent_chatrooms + current_user.received_chatrooms
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = @chatroom.messages
  end

  def create
    if Chatroom.between(current_user.id, params[:recipient_id]).present?
      @chatroom = Chatroom.between(current_user.id,
                                   params[:recipient_id]).first
    elsif Chatroom.between(params[:recipient_id],
                           current_user.id).present?
      @chatroom = Chatroom.between(params[:recipient_id],
                                   current_user.id).first
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
    params.require(:chatroom).permit(:recipient_id)
  end
end

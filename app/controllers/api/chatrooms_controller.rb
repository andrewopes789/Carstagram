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
    if Chatroom.where(sender_id: current_user.id,
                      recipient_id: params[:recipient_id]).present?
      @chatroom = Chatroom.where(sender_id: current_user.id,
                                 recipient_id: params[:recipient_id])
    elsif Chatroom.where(sender_id: params[:recipient_id],
                         recipient_id: current_user.id).present?
      @chatroom = Chatroom.where(sender_id: params[:recipient_id],
                                 recipient_id: current_user.id)
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

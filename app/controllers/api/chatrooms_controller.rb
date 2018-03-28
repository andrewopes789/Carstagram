class Api::ChatroomsController < ApplicationController
  before_action :require_signed_in!
  def index
    @chatrooms = current_user.chatrooms
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = @chatroom.messages
  end

  def create
    user = User.find(params[:user_id])
    @chatroom = nil

    current_user.chatrooms.each do |chatroom|
      if chatroom.members.include?(user)
        @chatroom = chatroom
        render :show
        return
      end
    end

    if @chatroom.nil?
      @chatroom = Chatroom.new
      if @chatroom.save
        ChatroomMembership.new(chatroom_id: @chatroom.id,
                               member_id: current_user.id).save
        ChatroomMembership.new(chatroom_id: @chatroom.id,
                               member_id: params[:user_id]).save
        render :show
      else
        render json: @chatroom.errors.full_messages, status: 422
      end
    end
  end

end

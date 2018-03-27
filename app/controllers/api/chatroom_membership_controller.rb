class Api::ChatroomMembershipsController < ApplicationController
  before_action :require_signed_in!
  def index
    @chatrooms_memberships = current_user.chatroom_memberships
  end

  def show
    @chatroom_membership = ChatroomMembership.find(params[:id])
  end

  def create
    @chatroom_membership = ChatroomMembership.new(chatroom_membership_params)
    if @chatroom_membership.save
      render :show
    else
      render json: @chatroom_membership.errors.full_messages, status: 422
    end
  end

  private

  def chatroom_membership_params
    params.require(:chatroom_membership).permit(:member_id, :chatroom_id)
  end
end

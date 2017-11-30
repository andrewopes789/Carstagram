class Api::FollowsController < ApplicationController
  before_action :require_signed_in!

  def create
    follower_id = current_user.id
    following_id = params[:id]
    @follow = Follow.new(follower_id: follower_id, following_id: following_id)
    @user = User.find_by(id: following_id)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, following_id: params[:id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end

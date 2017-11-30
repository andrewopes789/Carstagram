class Api::LikesController < ApplicationController
  before_action :require_signed_in!

  def index
    @photo = Photo.find(params[:photo_id])
    @likes = @photo.likes
  end

  def create
    user_id = current_user.id
    photo_id = params[:id]
    @like = Like.new(user_id: user_id, photo_id: photo_id)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])

    if @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end
end

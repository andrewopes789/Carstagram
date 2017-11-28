class Api::LikesController < ApplicationController
  before_action :require_signed_in!

  def index
    @photo = Photo.find(params[:photo_id])
    @likes = @photo.likes
  end

  def create
    @like = Like.new
  end

  def destroy
    @like = current_user.likes.find(params[:id])

    if @like.destroy
      render 'api/photos'
    else
      render json: @like.errors.full_messages
    end
  end
end

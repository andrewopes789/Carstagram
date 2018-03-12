class Api::ChatroomController < ApplicationController
  before_action :require_signed_in!
  def index
    @photo = Photo.find(params[:photo_id])
    @comments = @photo.comments
  end

  def create
    user_id = current_user.id
    photo_id = params[:photo_id]
    @comment = Comment.new(user_id: user_id, photo_id: photo_id, body: comment_params[:body])

    if @comment.save
      render :show
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :destroy
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end

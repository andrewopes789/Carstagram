class Api::UsersController < ApplicationController
  def index
    not_followed_users = User.all.sample(20).reject do |user|
      current_user.followings_by_id.include?(user.id) ||
      user.id == current_user.id
    end
    @users = not_followed_users.sample(3)
    @photos = Photo.where(author_id: not_followed_users).limit(12)
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

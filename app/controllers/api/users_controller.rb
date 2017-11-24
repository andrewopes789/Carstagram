class Api::UsersController < ApplicationController

  def index
    @users = User.includes(followings: [:photos, :likes]).where(id: current_user.id)
    render json: @users
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

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/photos/?profile=false"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.permit(:user).permit(:username, :email, :password)
  end
end

class Api::UsersController < ApplicationController
  def index
    not_followed_users = []

    until not_followed_users.length === 12
      offset = rand(User.count)
      random_user = User.offset(offset).first
      if random_user != current_user
        not_followed_users.push(random_user)
      end
    end

    @users = not_followed_users
    @photos = Photo.order(created_at: :asc).page(params[:pageId]).per(12)
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

  def update
    @user = current_user

    if @user.update(user_params)
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
    params.require(:user).permit(:username, :email, :password, :img_url)
  end
end

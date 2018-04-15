class Api::RecommendationsController < ApplicationController
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
end

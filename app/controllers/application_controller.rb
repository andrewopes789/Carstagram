class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def current_user
    token = cookies.encrypted[:session_token]
    return nil unless token
    @current_user ||= User.find_by(session_token: token)
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    user.reset_session_token!
    cookies.encrypted[:session_token] = user.session_token
    @current_user = user
  end

  def sign_out
    current_user.session_token = nil
    cookies.encrypted[:session_token] = nil
    @current_user = nil
  end

  def require_signed_in!
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :signed_in?, :current_user

  private 
  
  def signed_in?
    !!current_user
  end

  def current_user
    session_token = session[:session_token]
    return nil if session_token = nil 
    @current_user ||= User.find_by_session_token(session_token)
  end

  def sign_in(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def sign_out
    current_user.try(:reset_session_token)
    session_token = [:nil]
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

end

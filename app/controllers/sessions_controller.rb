class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])    
    
    #handle login as guest by creating new user "Guest"
    if params[:user][:name] == "Login as guest"
      user = User.create(fname: "Guest", lname: "User", password: "password", email: "hiring?", money: 1000)
    end
    
    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect email or password"]
      render :new, status: 401
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

end

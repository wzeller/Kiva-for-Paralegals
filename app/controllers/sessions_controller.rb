class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])    
    
    #handle login as guest by creating new user "Guest"; always start with $1000
    if params[:user][:name] == "Login as guest"
      user = User.find_by_fname("Guest") || User.create(fname: "Guest", lname: "User", password: "password", email: "hiring?", money: 1000, avatar_file_name: "guest.jpg")
      user.money = 1000
      user.save!
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

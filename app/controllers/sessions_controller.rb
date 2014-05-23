class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])    
    
    #handle login as guest by creating new user "Guest"
    if params[:user][:name] == "Login as guest"
      user = User.find_by_fname("Guest") || User.create(fname: "Guest", lname: "User", password: "password", email: "hiring?", money: 1000)
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


#  id                  :integer          not null, primary key
#  fname               :string(255)      not null
#  lname               :string(255)      not null
#  password_digest     :string(255)      not null
#  email               :string(255)      not null
#  session_token       :string(255)      not null
#  created_at          :datetime
#  updated_at          :datetime
#  team_id             :integer
#  money               :integer
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#
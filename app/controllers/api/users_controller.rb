module Api
  class UsersController < ApiController
    
    def index
      @users = User.all
      render :index  
    end

    def show
      @user = User.find(params[:id])
      render partial: "api/users/user", locals: {user: @user}
    end

  end
end
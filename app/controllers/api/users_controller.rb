module Api
  class UsersController < ApiController
    
    def index
      @users = User.all
      render :index  
    end

    def show
      @user = User.find(params[:id])
      @paralegals = @user.paralegals
      render "api/users/show", locals: {user: @user}
    end

    def update
      @user = current_user
      @paralegal = Paralegal.find(params[:sponsorship])
      money = params[:money]
      donation = params[:donation]
    
      ActiveRecord::Base.transaction do 
        @user.update_attributes(user_params) 
        @paralegal.update_attributes(money: params[:amount] )
        unless @user.paralegals.include?(@paralegal) 
          @sponsorship = Sponsorship.create(user_id: @user.id, donation: donation, paralegal_id: params[:sponsorship])
        end
      end
      

      unless @sponsorship.errors || @user.errors || @paralegal.errors
        render partial: "api/users/user", locals: {user: @user} 
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    end
    
    private

    def user_params
      params.require(:user).permit(:money) 
    end

  end
end
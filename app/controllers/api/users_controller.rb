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
      
      if @user.update_attributes(user_params) && @paralegal.update_attributes(money: params[:amount] )
        render partial: "api/users/user", locals: {user: @user}
        unless @user.paralegals.include?(@paralegal) 
          Sponsorship.create(user_id: @user.id, paralegal_id: params[:sponsorship])
        end
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
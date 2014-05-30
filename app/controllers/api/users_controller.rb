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

      if params[:sponsorship] == ""
        @user = current_user
        @user.update_attributes(user_params)
        render partial: "api/users/user", locals: {user: @user}
      
      else 
        #using update because I wanted to use backbone's save instead of ajax request with custom routes -- need to refactor
        @user = current_user
        @paralegal = Paralegal.find(params[:sponsorship])
        money = params[:money]
        @sponsorship = Sponsorship.new

        ActiveRecord::Base.transaction do 
          @user.update_attributes(user_params) 
          @paralegal.update_attributes(money: params[:amount] )  
          if !@user.paralegals.include?(@paralegal)
           @sponsorship = Sponsorship.new(user_id: @user.id, donation: params[:donation], paralegal_id: params[:sponsorship])
           @sponsorship.save!
          else
            @sponsorship = Sponsorship.where(user_id: @user.id, paralegal_id: @paralegal.id).first
            new_donation = @sponsorship.donation + params[:donation]
            @sponsorship.update_attributes(donation: new_donation)
          end
        end 

        if (@user.errors.full_messages.length + @sponsorship.errors.full_messages.length + @paralegal.errors.full_messages.length) == 0
          render partial: "api/users/user", locals: {user: @user} 
        else
          render json: { user_errors: @user.errors.full_messages, paralegal_errors: @paralegal.errors.full_messages, sponsor_errors: @sponsorship.errors.full_messages }, status: 422
        end
      end
    end
    
    private

    def user_params
      params.require(:user).permit(:money) 
    end

  end
end
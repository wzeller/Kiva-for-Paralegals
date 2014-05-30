module Api
  class TeamsController < ApiController
    
    def index
      @teams = Team.all
      render "api/teams/index"
    end

    def show
      @team = Team.find(params[:id])
      @team_members = @team.team_members
      render "api/teams/show", locals: {team: @team, team_members: @team_members}
    end

    def update
      @team = Team.find(params[:id])
      @user = User.find(params[:user][:id])
      @membership = TeamMembership.new(team_id: @team.id, user_id: @user.id)

      if @membership.save
        render "api/teams/index"
      else
        render json: { user_errors: @user.errors.full_messages }
      end
    end

    private

    def team_params
      params.require.(:team).permit.(:name, :avatar)
    end

    def user_params
      params.require(:user).permit(:id)
    end

  end
end

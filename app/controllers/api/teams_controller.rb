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

    private

    def team_params
      params.require.(:team).permit.(:name, :avatar)
    end

  end
end

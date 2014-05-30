  class TeamsController < ApplicationController
    
    def new
      @team = Team.new
    end

    def create
      @user = current_user
      @team = @user.teams.build(team_params)
      if @team.save
        redirect_to "#myTeams"
      else
        flash.now[:errors] = @team.errors.full_messages
        render :new
      end
    end

    private

    def team_params
      params.require(:team).permit(:name, :avatar)
    end
  end
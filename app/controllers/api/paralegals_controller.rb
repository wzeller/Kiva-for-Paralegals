module Api
  class ParalegalsController < ApiController
    
    def index
      @paralegals = Paralegal.all
      render :index  
    end

    def show
      @paralegal = Paralegal.find(params[:id])
      render partial: "api/paralegals/paralegal", locals: {paralegal: @paralegal}
    end

  end
end
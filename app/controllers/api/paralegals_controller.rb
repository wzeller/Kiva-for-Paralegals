module Api
  class ParalegalsController < ApiController
    
    def index
      @paralegals = Paralegal.all
      render "api/paralegals/index" 
    end

    def show
      @paralegal = Paralegal.find(params[:id])
      @sponsors = @paralegal.sponsors
      render "api/paralegals/show", locals: {paralegal: @paralegal}
    end

  end
end
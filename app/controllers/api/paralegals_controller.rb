module Api
  class ParalegalsController < ApiController
    
    def index
      @paralegals = Paralegal.all
      render :index  
    end

  end
end
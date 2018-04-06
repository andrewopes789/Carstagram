class Api::SearchesController < ApplicationController
  def index
    if params[:query].length.zero?
      @results = []
    else
      @results = User.top_results(params[:query])
    end
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end

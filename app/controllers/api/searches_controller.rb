class Api::SearchesController < ApplicationController
  def index
    @results = User.top_results(params[:query])
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end

class Api::RecommendationsController < ApplicationController
  def index
    @photos = Photo.order(created_at: :asc).page(params[:pageId]).per(12)
  end
end

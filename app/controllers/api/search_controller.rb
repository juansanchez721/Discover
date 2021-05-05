class Api::SearchController < ApplicationController


    def index
        @tracks = Track.where("title LIKE ?", "%#{search_params[:entity]}%")
        render :index
    end


    def search_params
        params.require(:search).permit(:entity)
    end
end
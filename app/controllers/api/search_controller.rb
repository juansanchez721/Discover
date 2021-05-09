class Api::SearchController < ApplicationController


    def index
        # debugger

        @tracks = Track.where("title LIKE ?", "%#{params[:entity]}%")
        @artists = User.where("username LIKE ?", "%#{params[:entity]}%")

        # debugger
        render :index
    end

end
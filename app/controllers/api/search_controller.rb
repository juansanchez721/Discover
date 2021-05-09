class Api::SearchController < ApplicationController


    def index
        # debugger

        @tracks = Track.where("LOWER(title) LIKE ?", "%#{params[:entity].downcase}%")
        @artists = User.where("LOWER(username) LIKE ?", "%#{params[:entity].downcase}%")

        # debugger
        render :index
    end

end
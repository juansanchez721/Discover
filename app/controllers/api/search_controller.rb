class Api::SearchController < ApplicationController


    def index
        # debugger

        @tracks = Track
                .where("LOWER(title) LIKE ?", "%#{params[:entity].downcase}%")
                .limit(4)
        @artists = User
                .where("LOWER(username) LIKE ?", "%#{params[:entity].downcase}%")
                .limit(4)

        # debugger
        render :index
    end

end
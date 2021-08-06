class Api::SearchController < ApplicationController


    def index
        # debugger

        @tracks = Track.search_method(params[:entity])
        # debugger
        @artists = User.search_method(params[:entity])

        # debugger
        render :index
    end

end
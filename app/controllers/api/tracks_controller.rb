class Api::TracksController < ApplicationController 

    def index 
        @tracks = Track.all
    end

    def show 
        @track = Track.find(params[:id])
        render :show
    end



end
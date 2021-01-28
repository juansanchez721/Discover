class Api::TracksController < ApplicationController 

    def index 
        @tracks = Track.all
    end

    def show 
        @track = Track.find(params[:id])
        # debugger
        # track = @track
        # debugger
        # @user = track.user
        # debugger
        render :show
    end



end
class Api::TracksController < ApplicationController 

    def index 
        # debugger
        if params.has_key?(:user_id)
            # debugger
            @tracks = Track.where(owner_id: params[:user_id])
            # debugger
        else
            # debugger
            @tracks = Track.all
            # debugger
        end
    end

    def create
        # debugger
        @track = Track.new(track_params)
        # debugger
        if (@track.save)
            # render :show
        else
            render json: @track.errors.full_messages, status: 422
        end

    end

    def show 
        @track = Track.find(params[:id])
        render :show
    end


    def track_params
        params.require(:track).permit(:title, :description, :genre, :owner_id, :track, :photo)
    end

end
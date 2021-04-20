class Api::TracksController < ApplicationController 

    def index 
         
        if params.has_key?(:user_id)
             
            @tracks = Track.where(owner_id: params[:user_id])
             
        else
             
            @tracks = Track.all
             
        end
    end

    def create
         
        @track = Track.new(track_params)
         
        if (@track.save)
            # render :show
        else
            render json: @track.errors.full_messages, status: 422
        end

    end

    def update
         
        @track = Track.find(params[:id])
         

        if @track.update(track_params)
            # render json: ["Update was successful"], status: 200
            render :show
        else
            render json: song.errors.full_messages, status: 422
        end

    end

    def destroy 

        @track = Track.find(params[:id])
         
        if @track
            @track.destroy
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
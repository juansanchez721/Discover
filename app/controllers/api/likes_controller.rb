class Api::LikesController < ApplicationController

    def index 

        if params.has_key?(:track_id)
            @likes = Like.where(likeable_id: params[:track_id])
        
        elsif params.has_key?(:user_id)
            @likes = Like.where(liker_id: params[:user_id])
        else
            @likes = Like.all
        end

    end

    def create

        create_like_params = like_params
        create_like_params[:liker_id] = current_user.id
         
        @like = Like.new(create_like_params)
        
         

        if @like.save
             
            @track = Track.find_by(id: @like.likeable_id)
             
            redirect_to api_track_url(@track.id), status: 303
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

    def destroy 

        create_like_params = like_params
        create_like_params[:liker_id] = current_user.id

        @like = Like.find_by(create_like_params)

        if @like
            @like.destroy!
             
            @track = Track.find_by(id: @like.likeable_id)
             
            redirect_to api_track_url(@track.id), status: 303
        else
            render json: ["Couldn't find like"]
        end
    end 

    
    
        def like_params  
               
            params.require(:like).permit(:likeable_id, :likeable_type)
        end
end
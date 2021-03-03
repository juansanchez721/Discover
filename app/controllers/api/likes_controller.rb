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

        @like = Like.new(like_params)

        if @like.save

        else
            render json: @like.errors.full_messages, status: 422
        end

    end

    
    
        def like_params    
            params.require(:like).permit(:likeable_id, :likeable_type, :liker_id)
        end
end
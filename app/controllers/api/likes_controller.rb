class Api::LikesController < ApplicationController

    def index 
        @userBool = false
        if params.has_key?(:track_id)
            @likes = Like.where(likeable_id: params[:track_id])
        
        elsif params.has_key?(:user_id)
            @userBool = true
            @likes = Like.where(liker_id: params[:user_id])
        else
            @likes = Like.all
        end

    end

    def create

        @profileBool = params[:type]

        create_like_params = like_params
        create_like_params[:liker_id] = current_user.id
         
        @like = Like.new(create_like_params)
        
        # debugger
         

        if @like.save
            # debugger

            if @profileBool === "Profile"
                # debugger
                @track = Track.find_by(id: @like.likeable_id)
                # debugger
                redirect_to api_track_url(@track.id), status: 303
            else
                @user = User.find_by(id: current_user.id)
                redirect_to api_user_url(current_user.id), status: 303
            end
        
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

    def destroy 

        @profileBool = params[:type]

        create_like_params = like_params
        create_like_params[:liker_id] = current_user.id

        @like = Like.find_by(create_like_params)

        if @like
            @like.destroy!
            if @profileBool === "Profile"
                # debugger
                @track = Track.find_by(id: @like.likeable_id)
                # debugger
                 redirect_to api_track_url(@track.id), status: 303
            else
                @user = User.find_by(id: current_user.id) 
                redirect_to api_user_url(current_user.id), status: 303
            end
        else
            render json: ["Couldn't find like"]
        end
    end 

    
    
        def like_params  
               
            params.require(:like).permit(:likeable_id, :likeable_type)
        end
end
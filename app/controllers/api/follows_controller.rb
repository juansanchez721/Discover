class Api::FollowsController < ApplicationController


    def index 
       if params.has_key?(:user_id)

       @followers = Follow.get_followers(params[:user_id])
       @followings = Follow.get_follows(params[:user_id])
       else 
           # @follows = Follow.all
       end
    end

    def destroy

       @follow = Follow.find(params[:id])

       if @follow
           @follow.destroy
       end

    end

    def show

        @follow = Follow.find(params[:id])
        debugger
        render :show

    end

    def create 
        # debugger
        create_follow_params = follow_params
        create_follow_params[:follower_id] = current_user.id
        # debugger
        @follow = Follow.new(create_follow_params)
        # debugger
        if @follow.save
            # debugger    
            redirect_to api_follow_url(@follow.id)
        else
            # debugger
            render json: @follow.errors.full_messages, status: 422
        end

    end


    def follow_params

        params.require(:follow).permit(:followee_id)

    end

end
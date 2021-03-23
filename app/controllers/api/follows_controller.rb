class Api::FollowsController < ApplicationController


    def index 
       if params.has_key?(:user_id)

       @followers = Follow.get_followers(params[:user_id])
       @followings = Follow.get_follows(params[:user_id])
       else 
           # @follows = Follow.all
       end

       render :index
    end

    def destroy
        debugger
        delete_params = follow_params
        debugger
        delete_params[:follower_id] = current_user.id
       debugger
        @follow = Follow.find_by(delete_params)

       if @follow
        debugger
           @follow.destroy
           redirect_to api_user_url(current_user.id), status: 303
       end


    end

    # def show

    #     @follow = Follow.find(params[:id])
    #     debugger
    #     render :show

    # end

    def create 
        # debugger
        create_follow_params = follow_params
        create_follow_params[:follower_id] = current_user.id
        # debugger
        @follow = Follow.new(create_follow_params)
        # debugger
        if @follow.save
            # debugger    
            redirect_to api_user_url(current_user.id)
        else
            # debugger
            render json: @follow.errors.full_messages, status: 422
        end

    end


    def follow_params

        params.require(:follow).permit(:followee_id)

    end

end
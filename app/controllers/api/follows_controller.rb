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
        # debugger
        delete_params = {
            followee_id: follow_params[:followee_id]
    }
        # debugger
        delete_params[:follower_id] = current_user.id
    #    debugger
        @follow = Follow.find_by(delete_params)

       if @follow
        # debugger
           
           if @follow.destroy && follow_params[:currentUserId]
            
            redirect_to  api_user_follows_url(current_user.id), status: 303
        else
            @users = User.find(follow_params[:followee_id], current_user.id)
            render 'api/users/index' 
        end
        end


    end

    def create 
        # debugger
        create_follow_params = {
                followee_id: follow_params[:followee_id]
        }
        create_follow_params[:follower_id] = current_user.id
        # debugger
        @follow = Follow.new(create_follow_params)
        # debugger
        if @follow.save
            @users = User.find(follow_params[:followee_id], current_user.id)
            # debugger
            if follow_params[:currentUserId]
                # debugger    
                redirect_to  api_user_follows_url(current_user.id)
            else
                render 'api/users/index' 
            end
        else
            # debugger
            render json: @follow.errors.full_messages, status: 422
        end

    end


    def follow_params
        # debugger
        params.require(:follow).permit(:followee_id, :currentUserId)

    end

end
class Api::FollowsController < ApplicationController


def index 
    if params.has_key?(:user_id)

    @follows = Follow.get_followers(params[:user_id])
    else 
        @follows = Follow.all
    end
end


end
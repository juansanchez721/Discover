class Api::CommentsController < ApplicationController

    def index 
        # debugger
        if params.has_key?(:track_id)
            # debugger
            @comments = Comment.where(track_id: params[:track_id])
            # debugger
        else
            # debugger
            @comments = Comment.all
            # debugger
        end
        
    
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end


end

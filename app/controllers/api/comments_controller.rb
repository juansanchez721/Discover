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


    def create 

        @comment = Comment.new(comment_params)
        # debugger
        if @comment.save
        # debugger
            render :show 
        else
            # debugger
            render json: @comment.errors.full_messages, status: 422
        end

        # debugger
    end



    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def comment_params
        # debugger
        params.require(:comment).permit(:commenter_id, :track_id, :body)

    end

end

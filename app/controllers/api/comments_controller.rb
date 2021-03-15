class Api::CommentsController < ApplicationController

    def index 
        # debugger
        if params.has_key?(:track_id)
            # debugger
            @comments = Comment.where(track_id: params[:track_id])
            # debugger
        elsif params.has_key?(:user_id)

            @comments = Comment.where(commenter_id: params[:user_id])

        else
            # debugger
            @comments = Comment.all
            # debugger
        end
        
    
    end


    def create 

        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        end

    end

    def destroy 
        # debugger
        @comment = Comment.find(params[:id])
        @comment.destroy
    end



    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def comment_params
        # debugger
        params.require(:comment).permit(:parent_comment_id, :commenter_id, :track_id, :body)

    end

end

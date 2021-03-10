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
        # if (comment_params[:parent_comment_id] === nil)
        #     # debugger
        #     if comment.save
        #         # debugger
        #         @comment = comment
        #         # debugger
        #         render :show
        #     end
        # else
        #     # debugger
        #     if comment.save
        #         # debugger
        #         @comment = Comment.find(comment_params[:parent_comment_id])
        #         # debugger
        #         render :show
        #     end
        # end

    end

    def destroy 
        debugger
        subcomment = Comment.find(params[:id])
        parentCommentId = subcomment[:parent_comment_id]
        debugger
        debugger
        if parentCommentId
            debugger
            subcomment.destroy
            @comment = Comment.find(parentCommentId)
            debugger
            render "api/comments/show"
        else
            debugger
            @comment = subcomment
            debugger
            @comment.destroy
            debugger
        end
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

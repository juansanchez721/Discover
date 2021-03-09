class Api::CommentsController < ApplicationController

    def index 
        # debugger
        if params.has_key?(:track_id)
            # debugger
            @comments = Comment.where(track_id: params[:track_id],
                                        parent_comment_id: nil)
            # debugger
        else
            # debugger
            @comments = Comment.all
            # debugger
        end
        
    
    end


    def create 

        comment = Comment.new(comment_params)

        if (comment_params[:parent_comment_id] === nil)
            # debugger
            if comment.save
                # debugger
                @comment = comment
                # debugger
                render :show
            end
        else
            # debugger
            if comment.save
                # debugger
                @comment = Comment.find(comment_params[:parent_comment_id])
                # debugger
                render :show
            end
        end

    end

    def destroy 

        @comment = Comment.find(params[:id])
        # debugger
        if @comment
            # debugger
            @comment.destroy
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

class Api::UsersController < ApplicationController

    def index 

        @users = User.all
        render :index

    end
        def create 
            @user = User.new(user_params)
            # debugger
            if @user.save
                # debugger 
                login(@user)
                render :show
            else
                # debugger
                render json: @user.errors.full_messages, status: 422
            end
        end

        def show 
            @user = User.find(params[:id])
            #     debugger
            # user = @user
            # debugger
            # @tracks = user.tracks.all
            # debugger
            render :show
        end
        

        def user_params
            params.require(:user).permit(:username, :email, :password, :gender, :age, photos: [])
        end
end

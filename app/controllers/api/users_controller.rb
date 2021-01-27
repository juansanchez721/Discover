class Api::UsersController < ApplicationController

        def create 
            @user = User.new(user_params)
            # debugger
            if @user.save
                # debugger 
                login(@user)
                # render "api/users/show"
            else
                # debugger
                render json: @user.errors.full_messages, status: 422
            end
        end

        def show 
            @user = User.find(params[:id])
            render :show
        end
        

        def user_params
            params.require(:user).permit(:username, :email, :password, :gender, :age)
        end
end

class Api::UsersController < ApplicationController

        def create 
            @user = User.new(user_params)
            debugger
            if @user.save
                debugger 
                login(@user)
                render "You are now logged in"
            else
                debugger
                render json: @user.errors.full_messages, status: 422
            end
        end

        def user_params
            params.require(:user).permit(:username, :email, :password)
        end
end

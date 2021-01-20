class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        # debugger
        if @user 
            login(@user)
            # debugger
            render 'api/users/show'
        else
            render json: ["Incorrect username or password"] 
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render {}
        else
            render json: ["No Current User Available"], status: 404 
        end
    end

end

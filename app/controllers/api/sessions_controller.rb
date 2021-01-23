class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        # debugger
        if @user 
            login(@user)
            # debugger
            render 'api/users/show'
        else
            render json: ["Incorrect username or password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            # debugger
            logout!
            render json: {message: "Logged out"}
        else
            render json: ["No Current User Available"], status: 404 
        end
    end

end

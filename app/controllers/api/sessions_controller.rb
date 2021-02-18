class Api::SessionsController < ApplicationController

    def search 
        # debugger
        @user = User.search(params[:word])
        if @user
            # debugger
            render json: ["Email taken already"], status: 401
            # debugger
        else
            # debugger
            render json: ["Email Available"], status: 200
        end
        # debugger
    end

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
            render json: ["Invalid email or password."], status: 401
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

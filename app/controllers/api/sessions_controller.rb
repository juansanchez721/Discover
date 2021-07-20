class Api::SessionsController < ApplicationController

    def search 
         
        @user = User.search(params[:word])
        if @user
            render json: ["Email in use already"], status: 401             
        else
            render json: ["Email Available"], status: 200
        end
         
    end

    def create 


        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
         
        if @user 
            login(@user)
             
            render 'api/users/show'
        else
            render json: ["Invalid email or password."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
             
            logout!
            render json: {message: "Logged out"}
        else
            render json: ["No Current User Available"], status: 404 
        end
    end

end

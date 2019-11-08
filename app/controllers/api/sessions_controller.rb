class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials( 
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      if (params[:user][:email].length < 1 || params[:user][:email].length < 1)
        render json: ["Please enter your email and password"], status: 401
      else 
        render json: ["Email and password do not match"], status: 401
      end
    end
  end


  def destroy
    @user = current_user
    if @user 
      logout
      render "api/users/show"
    else
      render json: ["No user logged in"], status: 404 
    end
  end
end

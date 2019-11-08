class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ['failed to create user'], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end

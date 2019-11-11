class Api::VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    render 'api/videos/show'
  end

  def index
    @videos = Video.all
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :privacy, :tags, :language, :content_rate, :owner_id)
  end
end

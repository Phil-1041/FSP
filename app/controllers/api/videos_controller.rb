class Api::VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    render 'api/videos/show'
  end

  def index
    @videos = Video.all #Video.all.include(s)(:likes).include(:comments)
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render 'api/videos/show'
    else
      render json: video.errors.full_message, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :privacy, :tags, 
      :language, :content_rate, :owner_id, :video)
  end
end

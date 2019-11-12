#json.videos do 
@videos.each do |video|
  json.set! video.id do 
    json.partial! 'api/videos/video', video: video
    json.url url_for(video.video)
  end
end
# json.comments
# end
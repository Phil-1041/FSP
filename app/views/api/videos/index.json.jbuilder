@videos.each do |video|
  jsong.set! video.id do 
    json.partial! 'api/videos/video', video: video
  end
end
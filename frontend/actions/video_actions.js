import { videoShow, videoIndex} from '../util/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideos = videos => {
  return ({
  type: RECEIVE_VIDEOS,
  videos
  })
}

export const fetchVideos = () => dispatch => (
  videoIndex().then(videos => (dispatch(receiveVideos(videos))))
)

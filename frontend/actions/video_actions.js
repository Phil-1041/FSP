import { videoShow, videoIndex} from '../util/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
})

export const fetchVideos = () => dispatch => (
  videoIndex().tehn(videos => (dispatch(receiveVideos(videos))) )
)

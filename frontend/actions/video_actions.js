import { videoShow, videoIndex, videoCreate} from '../util/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

export const receiveVideos = videos => {
  return ({
    type: RECEIVE_VIDEOS,
    videos: videos
  })
}

export const receiveVideo = video => {
  return ({
    type: RECEIVE_VIDEO,
    video
  })
}

const receiveErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
})

export const fetchVideos = () => dispatch => (
  videoIndex().then( videos => dispatch(receiveVideos(videos)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const uploadVideo = (video) => dispatch => (
  videoCreate(video).then( video => dispatch(receiveVideo(video)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
) 

export const fetchVideo = (videoId) => dispatch => (
  videoShow(videoId).then( video => dispatch(receiveVideo(video)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
) 
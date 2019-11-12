import { RECEIVE_VIDEO, RECEIVE_VIDEOS} from "../actions/video_actions"

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      newState[action.video.id] = action.video;
      return newState;
    default:
      return state;
  }
}

export default videoReducer;
import { RECEIVE_VIDEO, RECEIVE_VIDEOS} from "../actions/video_actions"

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return action.video;
    default:
      return state;
  }
}

export default videoReducer;
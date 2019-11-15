import {getUser} from '../util/user_util'

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  })
}

const receiveErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors
})

export const fetchUser = (userId) => dispatch => (
  getUser(userId).then( user => dispatch(receiveUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)
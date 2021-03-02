import * as CommentUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const fetchTrackComments = trackId => dispatch => {
    return CommentUtil.fetchTrackComments(trackId)
    .then(comments => dispatch(receiveComments(comments)))
}
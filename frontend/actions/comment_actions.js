import * as CommentUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const fetchTrackComments = trackId => dispatch => {
    return CommentUtil.fetchTrackComments(trackId)
    .then(comments => dispatch(receiveComments(comments)))
}

export const createComment = comment => dispatch => {
    debugger
    return CommentUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
}
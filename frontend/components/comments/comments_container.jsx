import { connect } from "react-redux"
import { createComment, deleteComment } from '../../actions/comment_actions'
import { createFollow, deleteFollow } from '../../actions/follows_action'
import { createLike, deleteLike } from "../../actions/like_actions"
import Comments from "./comments"



const mSTP = (state, ownProps) => {
    // let trackId = parseInt(ownProps.match.params.trackId)
    return {
        // trackId,
        comments: state.entities.comments,
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        follow: userId => dispatch(createFollow(userId)),
        unfollow: userId => dispatch(deleteFollow(userId)),
        createLike: (trackId) => dispatch(createLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteLike(trackId)),

    }
}

export default connect(mSTP, mDTP)(Comments)
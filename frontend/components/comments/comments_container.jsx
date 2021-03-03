import { connect } from "react-redux"
import { createComment, deleteComment } from '../../actions/comment_actions'
import Comments from "./comments"



const mSTP = (state, ownProps) => {
    debugger
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
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(Comments)
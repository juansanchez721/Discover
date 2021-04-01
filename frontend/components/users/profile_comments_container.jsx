import { connect } from 'react-redux'
import { fetchUserComments } from '../../actions/comment_actions'
import ProfileComments from './profile_comments'

const mSTP = state => {
    return {
        user: Object.values(state.entities.users)[0],
        comments: state.entities.comments,
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    return {    
        fetchUserComments: userId => dispatch(fetchUserComments(userId))
    }
}


export default connect(mSTP, mDTP)(ProfileComments)
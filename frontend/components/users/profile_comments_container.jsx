import { connect } from 'react-redux'
import { fetchUserComments } from '../../actions/comment_actions'
import ProfileComments from './profile_comments'

const mSTP = state => {
    return {
        comments: state.entities.comments
    }
}

const mDTP = dispatch => {
    return {    
        fetchUserComments: userId => dispatch(fetchUserComments(userId))
    }
}


export default connect(mSTP, mDTP)(ProfileComments)
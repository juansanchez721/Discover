import { connect } from "react-redux"
import FollowersPage from './followers_page'
import {
    fetchUserFollows, 
    createFollow, 
    deleteFollow, 
    createFollowCurrentUser, 
    deleteFollowCurrentUser
} from '../../actions/follows_action'

const mSTP = state => {
    return {
        followers: Object.values(state.entities.follows)[0],
        follows: Object.values(state.entities.follows)[1],
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    return {
        fetchUserFollows: userId => dispatch(fetchUserFollows(userId)),
        follow: userId => dispatch(createFollow(userId)),
        currentUserFollow: (currentUserId, userId) => dispatch(createFollowCurrentUser(currentUserId, userId)),
        currentUserUnFollow: (currentUserId, userId) => dispatch(deleteFollowCurrentUser(currentUserId, userId)),
        unfollow: userId => dispatch(deleteFollow(userId))
    }
}

export default connect(mSTP, mDTP)(FollowersPage)
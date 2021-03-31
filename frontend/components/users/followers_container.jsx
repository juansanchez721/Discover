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
        followers: 'followers' in state.entities.follows ? Object.values(state.entities.follows.followers) : null,
        follows: 'followings' in state.entities.follows ? Object.values(state.entities.follows.followings) : null,
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
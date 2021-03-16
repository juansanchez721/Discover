import LikesPage from './likes_page'
import { connect } from "react-redux"
import { fetchTrackLikes } from '../../actions/like_actions'
import { createLike, deleteLike, deleteCurrentUserLike, createCurrentUserLike, deleteTestUserLike } from "../../actions/like_actions"

import {asArray, asArrayUsers} from '../../reducers/selector'

const mSTP = (state, ownProps) => {
    return {
        likedTracks: state.entities.likes,
        currentUser: state.session,
    }
}

const mDTP = dispatch => {
    return {    
        fetchTrackLikes: userId => dispatch(fetchTrackLikes(userId)),
        createLike: (trackId) => dispatch(createCurrentUserLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteCurrentUserLike(trackId)),
        deleteTestLike: (trackId) => dispatch(deleteTestUserLike(trackId))

    }
}


export default connect(mSTP, mDTP)(LikesPage)
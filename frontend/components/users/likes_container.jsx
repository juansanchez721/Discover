import LikesPage from './likes_page'
import { connect } from "react-redux"
import { fetchTrackLikes } from '../../actions/like_actions'
import { createLike, deleteLike } from "../../actions/like_actions"

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
        createLike: (trackId) => dispatch(createLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteLike(trackId))
    }
}


export default connect(mSTP, mDTP)(LikesPage)
import LikesPage from './likes_page'
import { connect } from "react-redux"
import { fetchTrackLikes } from '../../actions/like_actions'
import { createLike, deleteLike, deleteCurrentUserLike, createCurrentUserLike, deleteAndRemoveLike } from "../../actions/like_actions"
import { queuePageSong, clearPageQueue } from '../../actions/playbar_actions'

import {asArray, asArrayUsers} from '../../reducers/selector'

const mSTP = (state, ownProps) => {
    return {
        likedTracks: Object.values(state.entities.likes),
        currentUser: state.session,
        currentPlayingTrack: state.ui.playbar.currentTrack,
    }
}

const mDTP = dispatch => {
    return {    
        fetchTrackLikes: userId => dispatch(fetchTrackLikes(userId)),
        createLike: (trackId) => dispatch(createCurrentUserLike(trackId, "Profile")),
        deleteLike: (trackId) => dispatch(deleteCurrentUserLike(trackId, "Profile")),
        deleteAndRemoveLike: (trackId) => dispatch(deleteAndRemoveLike(trackId, "Profile")),
        queuePageSong: trackId => dispatch(queuePageSong(trackId)),
        clearPageQueue: () => dispatch(clearPageQueue())

    }
}


export default connect(mSTP, mDTP)(LikesPage)
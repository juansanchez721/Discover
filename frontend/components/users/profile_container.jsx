import ProfilePage from './profile_page'
import {connect} from 'react-redux'
import { playSong } from '../../actions/playbar_actions'
import { createLike, deleteLike } from "../../actions/like_actions"
import {deleteTrackModal, updateTrackModal } from '../../actions/modal_actions'
import { fetchTrackLikes } from '../../actions/like_actions'
import { fetchUser } from '../../actions/user_actions'

import {fetchSingleUserTracks} from '../../actions/track_actions'

const mSTP = (state, ownProps) => {
    debugger
    let userId = parseInt(ownProps.match.params.userId)
    return {
        user: state.entities.users[userId],
        // tracks: state.entities.tracks,
        tracks: Object.values(state.entities.tracks).filter(track => track['owner_id'] === userId ),
        likes: Object.values(state.entities.likes).slice(-3),
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchSingleUserTracks: userId => dispatch(fetchSingleUserTracks(userId)),
        fetchTrackLikes: userId => dispatch(fetchTrackLikes(userId)),
        playSong: track => dispatch(playSong(track)),
        deleteTrackModal: (modal, track) => dispatch(deleteTrackModal(modal, track)),
        updateTrackModal: (modal, track) => dispatch(updateTrackModal(modal, track)),
        createLike: (trackId) => dispatch(createLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteLike(trackId))

    }
}


export default connect(mSTP, mDTP)(ProfilePage)
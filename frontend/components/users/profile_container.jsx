import ProfilePage from './profile_page'
import {connect} from 'react-redux'
import { deleteTrack, fetchTrack, updateTrack} from '../../actions/track_actions'
import { openModal, closeModal, deleteTrackModal, updateTrackModal } from '../../actions/modal_actions'
import { fetchUser } from '../../actions/user_actions'

import {fetchSingleUserTracks} from '../../actions/track_actions'

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        tracks: state.entities.tracks,
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchSingleUserTracks: userId => dispatch(fetchSingleUserTracks(userId)),
        // deleteTrack: trackId => dispatch(deleteTrack(trackId)),
        // updateTrack: track => dispatch(updateTrack(track)),
        // fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        deleteTrackModal: (modal, track) => dispatch(deleteTrackModal(modal, track)),
        updateTrackModal: (modal, track) => dispatch(updateTrackModal(modal, track))

    }
}


export default connect(mSTP, mDTP)(ProfilePage)
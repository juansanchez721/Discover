import ProfilePage from './profile_page'
import {connect} from 'react-redux'
import { playSong } from '../../actions/playbar_actions'
import { createLike, deleteLike } from "../../actions/like_actions"
import {deleteTrackModal, editUserModal, updateTrackModal } from '../../actions/modal_actions'
import { fetchTrackLikes } from '../../actions/like_actions'
import { fetchUser } from '../../actions/user_actions'
import { fetchUserComments } from '../../actions/comment_actions'
import {fetchUserFollows, createFollow, deleteFollow} from '../../actions/follows_action'
import {queueSong, queuePageSong, clearPageQueue} from '../../actions/playbar_actions'

import {fetchSingleUserTracks} from '../../actions/track_actions'

const mSTP = (state, ownProps) => {
    let userId = parseInt(ownProps.match.params.userId)
    return {
        user: state.entities.users[userId],
        // tracks: state.entities.tracks,
        tracks: Object.values(state.entities.tracks).filter(track => track['owner_id'] === userId ),
        likes: Object.values(state.entities.likes).slice(-3),
        comments: Object.values(state.entities.comments).slice(-3),
        currentPlayingTrack: state.ui.playbar.currentTrack,
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchSingleUserTracks: userId => dispatch(fetchSingleUserTracks(userId)),
        fetchTrackLikes: userId => dispatch(fetchTrackLikes(userId)),
        playSong: track => dispatch(playSong(track)),
        deleteTrackModal: (modal, track) => dispatch(deleteTrackModal(modal, track)),
        updateTrackModal: (modal, track) => dispatch(updateTrackModal(modal, track)),
        editUserModal: (modal, user) => dispatch(editUserModal(modal, user)),
        createLike: (trackId) => dispatch(createLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteLike(trackId)),
        fetchUserComments: userId => dispatch(fetchUserComments(userId)),
        fetchUserFollows: userId => dispatch(fetchUserFollows(userId)),
        follow: userId => dispatch(createFollow(userId)),
        unfollow: userId => dispatch(deleteFollow(userId)),
        queueSong: songId => dispatch(queueSong(songId)),
        queuePageSong: songId => dispatch(queuePageSong(songId)),
        clearPageQueue: () => dispatch(clearPageQueue())



    }
}


export default connect(mSTP, mDTP)(ProfilePage)
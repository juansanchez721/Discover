import { connect } from 'react-redux'
import DiscoverPage from './discover_page'
import {fetchTracks} from '../../actions/track_actions'
import { createLike, deleteLike, deleteCurrentUserLike, createCurrentUserLike, fetchTrackLikes } from "../../actions/like_actions"
import { createFollow, deleteFollow} from '../../actions/follows_action'

import {fetchUsers} from '../../actions/user_actions'
import {asArray, asArrayUsers} from '../../reducers/selector'
const mstp = (state) => {
    return {
        currentUser: state.session,
        likes: Object.values(state.entities.likes),
        tracks: asArray(state.entities),
        users: state.entities.users,
        currentPlayingTrack: state.ui.playbar.currentTrack,
    }
}

const mdtp = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchUsers: () => dispatch(fetchUsers()),
        createLike: (trackId) => dispatch(createCurrentUserLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteCurrentUserLike(trackId)),
        fetchTrackLikes: (userId) => dispatch(fetchTrackLikes(userId)),
        follow: userId => dispatch(createFollow(userId)),
        unfollow: userId => dispatch(deleteFollow(userId))
    }
}


export default connect(mstp, mdtp)(DiscoverPage)
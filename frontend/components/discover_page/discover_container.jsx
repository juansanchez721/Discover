import { connect } from 'react-redux'
import DiscoverPage from './discover_page'
import {fetchTracks} from '../../actions/track_actions'
import { createLike, deleteLike } from "../../actions/like_actions"

import {fetchUsers} from '../../actions/user_actions'
import {asArray, asArrayUsers} from '../../reducers/selector'
const mstp = (state) => {
    debugger
    return {
        currentUser: state.session,
        tracks: asArray(state.entities),
        users: state.entities.users
    }
}

const mdtp = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchUsers: () => dispatch(fetchUsers()),
        createLike: (trackId) => dispatch(createLike(trackId)),
        deleteLike: (trackId) => dispatch(deleteLike(trackId))
    }
}


export default connect(mstp, mdtp)(DiscoverPage)
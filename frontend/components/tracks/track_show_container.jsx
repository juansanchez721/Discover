import { connect } from 'react-redux'
import  TrackShow from './track_show'
import { fetchTrack } from '../../actions/track_actions'
import { fetchUser } from '../../actions/user_actions'
import { fetchTrackComments } from '../../actions/comment_actions'


const mSTP = (state, { match }) => {

    const songId = parseInt(match.params.trackId);
    // const song = selectTrack(state.entities, match.params.trackId);
    debugger
    return {
        songId,
        song: state.entities.tracks[songId],
        user: Object.values(state.entities.users)[0],
        currentUser: state.session
    }
}


const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId))
    }
}


export default connect(mSTP, mDTP)(TrackShow)
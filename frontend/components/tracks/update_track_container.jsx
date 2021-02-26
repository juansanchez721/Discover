import { connect } from "react-redux"
import {fetchTrack, updateTrack} from '../../actions/track_actions'
import UpdateTrack from './update_track'

const mSTP = (state, ownProps) => {
    const trackId = parseInt(ownProps.match.params.trackId)
    debugger
    return {
        trackId,
        track: state.entities.tracks[trackId]
    }
}

const mDTP = dispatch => {
    return {
        updateTrack: track => dispatch(updateTrack(track)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(UpdateTrack)
import { connect } from "react-redux"
import ProfileTrackItem from './profile_track_item'

const mSTP = (state, ownProps) => {
    debugger
    return {
        tracks: state.entities.tracks
    }
}

const mDTP = (dispatch) => {
    return {
        deleteTrack: trackId => dispatch(deleteTrack(trackId))
        // fetchSingleUserTracks: userId => dispatch(fetchSingleUserTracks(userId))
    }

}



export default connect(mSTP, mDTP)(ProfileTrackItem)
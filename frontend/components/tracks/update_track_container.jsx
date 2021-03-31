import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"

import {fetchTrack, updateTrack} from '../../actions/track_actions'
import UpdateTrack from './update_track'

const mSTP = (state, ownProps) => {
    // const trackId = parseInt(ownProps.match.params.trackId)
    // debugger
    return {
        // trackId,
        // track: state.entities.tracks[trackId]
    }
}

const mDTP = dispatch => {
    return {
        updateTrack: (track, trackId) => dispatch(updateTrack(track, trackId)),
        closeModal: ()=> dispatch(closeModal())   
     }
}

export default connect(mSTP, mDTP)(UpdateTrack)
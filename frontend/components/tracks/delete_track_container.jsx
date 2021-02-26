import { connect } from "react-redux"
import DeleteTrack from './delete_track'

const mSTP = state => {
    return {
        tracks: state.entities.tracks
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, mDTP)(DeleteTrack)
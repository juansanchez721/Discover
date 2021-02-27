import { connect } from "react-redux"
import { closeModal } from "../../actions/modal_actions"
import {deleteTrack} from '../../actions/track_actions'
import DeleteTrack from './delete_track'

const mSTP = state => {
    return {
        user: state.session
    }
}

const mDTP = dispatch => {
    return {
        deleteTrack: trackId => dispatch(deleteTrack(trackId)),
        closeModal: ()=> dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(DeleteTrack)
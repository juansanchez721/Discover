import { connect } from "react-redux"
import { playSong } from '../../actions/playbar_actions'
import ProfileTrackItem from './profile_track_item'

const mSTP = (state, ownProps) => {
    debugger
    return {
        tracks: state.entities.tracks
    }
}

const mDTP = (dispatch) => {
    return {
        playSong: track => dispatch(playSong(track))
    }

}



export default connect(mSTP, mDTP)(ProfileTrackItem)
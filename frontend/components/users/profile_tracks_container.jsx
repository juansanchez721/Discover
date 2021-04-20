import { connect } from "react-redux"
import { createLike } from "../../actions/like_actions"
import {queueSong} from '../../actions/playbar_actions'

import ProfileTrackItem from './profile_track_item'

const mSTP = (state, ownProps) => {
    return {
        // tracks: state.entities.tracks
    }
}

const mDTP = (dispatch) => {
    return {
        // createLike: (like) => dispatch(createLike(like)),
        // queueSong: songId => dispatch(queueSong(songId))

        // playSong: track => dispatch(playSong(track))
    }

}



export default connect(mSTP, mDTP)(ProfileTrackItem)
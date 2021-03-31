import { connect } from 'react-redux'
import { fetchQueueTrack } from '../../actions/playbar_actions'
// import {queueSong} from '../../actions/playbar_actions'
import PlayBar from './playbar'

const mSTP = state => {
    debugger
    return {
        playbar: state.ui.playbar
    }
}

const mDTP = dispatch => {
    return {
        // queueSong: songId => dispatch(queueSong(songId))
        fetchNextTrack: trackId => dispatch(fetchQueueTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(PlayBar)
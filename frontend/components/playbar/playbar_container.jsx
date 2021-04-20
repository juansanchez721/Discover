import { connect } from 'react-redux'
import { fetchQueueTrack } from '../../actions/playbar_actions'
import {pauseSong, playSong} from '../../actions/playbar_actions'

import PlayBar from './playbar'

const mSTP = state => {
    return {
        playbar: state.ui.playbar
    }
}

const mDTP = dispatch => {
    return {
        // queueSong: songId => dispatch(queueSong(songId))
        fetchNextTrack: trackId => dispatch(fetchQueueTrack(trackId)),
        pauseSong: () => dispatch(pauseSong()),
        playSong: track => dispatch(playSong(track))
    }
}

export default connect(mSTP, mDTP)(PlayBar)
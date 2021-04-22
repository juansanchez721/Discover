import { connect } from 'react-redux'
import { fetchNextTrack, fetchPrevTrack } from '../../actions/playbar_actions'
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
        fetchPrevTrack: trackId => dispatch(fetchPrevTrack(trackId)),
        fetchNextTrack: trackId => dispatch(fetchNextTrack(trackId)),
        pauseSong: () => dispatch(pauseSong()),
        playSong: track => dispatch(playSong(track))
    }
}

export default connect(mSTP, mDTP)(PlayBar)
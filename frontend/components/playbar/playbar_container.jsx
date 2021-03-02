import { connect } from 'react-redux'
import PlayBar from './playbar'

const mSTP = state => {
    debugger
    return {
        currentTrack: state.ui.playbar
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(PlayBar)
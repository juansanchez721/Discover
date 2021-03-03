import {connect} from 'react-redux'
import UploadForm from './upload_track'
import {createTrack} from '../../actions/track_actions'
const mSTP = state => {

    return {
        currentUser: state.session
    }
}

const mDTP = dispatch => {
    return {
        createTrack: song => dispatch(createTrack(song))
    }
}


export default connect(mSTP, mDTP)(UploadForm)
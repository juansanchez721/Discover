import {connect} from 'react-redux'
import UploadForm from './upload_track'
import {createTrack} from '../../actions/track_actions'
const mSTP = state => {

    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        createTrack: song => dispatch(createTrack(song))
    }
}


export default connect(mSTP, mDTP)(UploadForm)
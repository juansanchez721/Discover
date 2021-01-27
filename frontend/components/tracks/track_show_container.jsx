import { connect } from 'react-redux'
import  TrackShow from './track_show'
import { selectTrack } from '../../reducers/selector';
import { fetchTrack } from '../../actions/track_actions'



const mSTP = (state, { match }) => {

    const songId = parseInt(match.params.trackId);
    const song = selectTrack(state.entities, match.params.trackId);
    debugger
    return {
        songId,
        song
    }
}


const mDTP = (dispatch) => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId))
    }
}


export default connect(mSTP, mDTP)(TrackShow)
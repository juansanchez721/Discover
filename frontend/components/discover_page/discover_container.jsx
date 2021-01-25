import { connect } from 'react-redux'
import DiscoverPage from './discover_page'
import {fetchTracks} from '../../actions/track_actions'

const mstp = (state) => {
    debugger
    return {
        tracks: state.tracks
    }
}

const mdtp = () => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}


export default connect(mstp, mdtp)(DiscoverPage)
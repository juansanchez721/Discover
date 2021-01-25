import { connect } from 'react-redux'
import DiscoverPage from './discover_page'
import {fetchTracks} from '../../actions/track_actions'
import {asArray} from '../../reducers/selector'
const mstp = (state) => {
    debugger
    return {
        tracks: asArray(state.entities)
    }
}

const mdtp = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}


export default connect(mstp, mdtp)(DiscoverPage)
import { connect } from 'react-redux'
import DiscoverPage from './discover_page'
import {fetchTracks} from '../../actions/track_actions'
import {fetchUsers} from '../../actions/user_actions'
import {asArray, asArrayUsers} from '../../reducers/selector'
const mstp = (state) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        tracks: asArray(state.entities),
        users: asArrayUsers(state.entities)
    }
}

const mdtp = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mstp, mdtp)(DiscoverPage)
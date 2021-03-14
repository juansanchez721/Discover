import LikesPage from './likes_page'
import { connect } from "react-redux"
import { fetchTrackLikes } from '../../actions/like_actions'
import {asArray, asArrayUsers} from '../../reducers/selector'

const mSTP = (state, ownProps) => {
    return {
        tracks: asArray(state.entities),
        currentUser: state.session,
    }
}

const mDTP = dispatch => {
    return {    
        fetchTrackLikes: userId => dispatch(fetchTrackLikes(userId))
    }
}


export default connect(mSTP, mDTP)(LikesPage)
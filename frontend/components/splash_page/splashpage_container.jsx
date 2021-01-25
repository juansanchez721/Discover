import { connect } from "react-redux"
import SplashPage from "./splashpage"
import { fetchTracks } from '../../actions/track_actions'
const mSTP = (state) => {
    return {

    }
}


const mDTP = (dispatch) => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}


export default connect(mSTP, mDTP)(SplashPage)
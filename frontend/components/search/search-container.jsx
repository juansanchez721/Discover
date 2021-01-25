import { connect } from "react-redux"
import SearchBar from "./searchbar"



const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {

    }
}


export default connect(mSTP, mDTP)(SearchBar)
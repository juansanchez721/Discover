import { connect } from "react-redux"
import Comments from "./comments"



const mSTP = state => {
    return {
        comments: state.entities.comments,
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Comments)
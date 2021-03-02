import React from 'react'
import { connect } from 'react-redux'
import { playSong } from '../../actions/playbar_actions'


class PlayButton extends React.Component {

    constructor(props){
        super(props)
        this.handlePlay = this.handlePlay.bind(this)   
    }
    handlePlay() {
        debugger
        this.props.playSong(this.props.track, this.props.user)
      }
  

    render(){

        return (
            <div className="orange-circle-container">
                  <div className="orange-circle" onClick={() => this.handlePlay()} ></div>
                </div>
        )
    }


}


const mSTP = state => {
    return {
        tracks: state.entities.tracks

    }
}

const mDTP = dispatch => {
    return {
        playSong: (track, user) => dispatch(playSong(track, user))

    }
}


export default connect(mSTP, mDTP)(PlayButton)
import React from 'react'
import { connect } from 'react-redux'
import { playSong } from '../../actions/playbar_actions'


class PlayButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            playing: false
        }
        this.handlePlay = this.handlePlay.bind(this)   
    }
    handlePlay() {
        debugger
        console.log(this.state.playing)
        this.state.playing ?
        alert('you wanna pause this?')
        :
        this.props.playSong(this.props.track)
        
        this.setState({ playing: !this.state.playing })
      }
  

    render(){

        return (
            <div className="orange-circle-container">
                  <div className={this.state.playing? "pause-orange-circle" : "orange-circle"} onClick={() => this.handlePlay()} ></div>
                </div>
        )
    }


}


const mSTP = state => {
    return {
        currentPlayingTrack: state.ui.playbar.currentTrack
    }
}

const mDTP = dispatch => {
    return {
        playSong: (track) => dispatch(playSong(track))

    }
}


export default connect(mSTP, mDTP)(PlayButton)
import React from 'react'
import { connect } from 'react-redux'
import { playSong, pauseSong } from '../../actions/playbar_actions'


class PlayButton extends React.Component {

    constructor(props){
        super(props)
        this.handlePlay = this.handlePlay.bind(this)   
        this.stop = this.stop.bind(this);
        this.play = this.play.bind(this);
    }
    handlePlay() {
        debugger
        // console.log(this.state.playing)
        this.props.isPlaying ?
        this.stop()
        // alert('you wanna pause this?')
        :
        this.play()
        
        // this.setState({ playing: !this.state.playing })
      }

      play() {
        if(this.props.currentTrack){

            let audio = document.getElementById("audio");
            audio.play();
            this.props.playSong(this.props.track)
        } else {
            this.props.playSong(this.props.track)

        }
      }
    
      stop() {
          if(this.props.currentTrackBool){

              let audio = document.getElementById("audio");
              audio.pause();
              this.props.pauseSong()
            } else {
                this.play()
            }
      }
  

    render(){

        return (
            <div className="orange-circle-container">
                  <div className={this.props.isPlaying && this.props.currentTrackBool? "pause-orange-circle" :"orange-circle"} onClick={() => this.handlePlay()} ></div>
                </div>
        )
    }


}


const mSTP = state => {
    return {
        isPlaying: state.ui.playbar.isPlaying,
        currentTrack: state.ui.playbar.currentTrack
    }
}

const mDTP = dispatch => {
    return {
        playSong: (track) => dispatch(playSong(track)),
        pauseSong: () => dispatch(pauseSong())
    }
}


export default connect(mSTP, mDTP)(PlayButton)
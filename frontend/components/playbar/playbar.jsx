import React from 'react'
// import song from '../../../app/assets/audio/Skeleton.mp3'
// const song = require('../../../app/assets/audio/Skeleton.mp3')
class PlayBar extends React.Component {

    constructor(props) {
        super(props)
        this.stop = this.stop.bind(this)
    }

    // componentDidUpdate(){
    //     this.setState({ title: this.props.currentSong.title})
    // }

    play() {
        let audio = document.getElementById("audio")
        audio.play()
    }

    stop(){
        let audio = document.getElementById("audio")
        audio.pause()
        }
    
    componentDidUpdate() {
        
        let audio = document.getElementById("audio")
        audio.play()
    }


    render(){

        if(this.props.currentTrack === null) {
            return null
        } else {
            let { currentTrack, artist } = this.props.currentTrack
            console.log(currentTrack, artist)
            return (
              <div className="playbar-div">

                <input type="button" value="PLAY" onClick={() => this.play()} />
                <input type="button" value="STOP" onClick={() => this.stop()} />

                <audio
                  id="audio"
                  controls
                  src="https://docs.google.com/uc?export=download&id=1EZ83lkITMMggPrUoZLZOB7N5kqbN95cB"
                  // src={currentTrack.track_url}
                >
                  {/* Your browser does not support the */}
                  {/* <code>audio</code> element. */}
                </audio>
                <div className="play-bar-song-info">

                <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />

                <div className="artist-song-links">
                    <h1 >{currentTrack.artist || "artist here"}</h1>
                    <h1 >{currentTrack.title || "song here"}</h1>
                </div>
                </div>
              </div>
            );
    }
    }
}

export default PlayBar
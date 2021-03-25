import React from 'react'
// import song from '../../../app/assets/audio/Skeleton.mp3'
// const song = require('../../../app/assets/audio/Skeleton.mp3')
class PlayBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          playing: false,
          loop: false
        }
        this.stop = this.stop.bind(this)
        this.play = this.play.bind(this)
        this.loop = this.loop.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
    }

    // componentDidUpdate(){
    //     this.setState({ title: this.props.currentSong.title})
    // }

    handlePlay(){
      (this.state.playing ? this.stop() : this.play())
      this.setState({ playing: !this.state.playing })
      // console.log(this.state.playing)
       }

    play() {
        let audio = document.getElementById("audio")
        audio.play()
    }

    stop(){
        let audio = document.getElementById("audio")
        audio.pause()
        }
    
    loop() {
      let audio = document.getElementById("audio")
      audio.loop = !audio.loop
      this.setState({ loop: !this.state.loop })
    }
    // componentDidUpdate() {
        
    //     let audio = document.getElementById("audio")
    //     audio.play()
    // }


    render(){

        // if(this.props.currentTrack === null) {
        //     return null
        // }

        //     let { currentTrack, artist } = this.props.currentTrack
        //     console.log(currentTrack, artist)

            return (
              <div className="playbar-div">

              <div className="media-controls" >

                <div>
                <i class="fas fa-fast-backward"></i>
                </div>
                <div className="play-pause" onClick={() => this.handlePlay()} >
                    {this.state.playing ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                </div>
                <div >
                <i class="fas fa-fast-forward"></i>
                </div>
                <div className={this.state.loop ? "orange-loop" : "loop"} onClick={()=>this.loop()} >
                  {this.state.loop ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-redo-alt"></i>}
                </div>
              </div>
                {/* <input type="button" value="PLAY" onClick={() => this.handlePlay()} /> */}
                {/* <input type="button" value="STOP" onClick={() => this.stop()} /> */}

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
                <h1 >{"artist here"}</h1>
                    <h1 >{"song here"}</h1>
                    {/* <h1 >{currentTrack.artist || "artist here"}</h1>
                    <h1 >{currentTrack.title || "song here"}</h1> */}
                </div>
                </div>
              </div>
            );
    
    }
}

export default PlayBar
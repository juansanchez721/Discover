import React from "react";
// import song from '../../../app/assets/audio/Skeleton.mp3'
// const song = require('../../../app/assets/audio/Skeleton.mp3')
class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      loop: false,
      duration: 0,
      currentTime: 0,
    };
    this.stop = this.stop.bind(this);
    this.play = this.play.bind(this);
    this.loop = this.loop.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this)
    // this.time = this.time.bind(this)
    this.handlePlay = this.handlePlay.bind(this);
  }

  onSliderChange(e){
      // console.log(e.target.value)
      const audio = document.getElementById("audio");
      this.setState({ currentTime: e.target.value})
      audio.currentTime = e.target.value
  }

  formatTime(time) {
    let thisTime = time;
    let minutes = time / 60;
    let seconds = Math.floor(time % 60);
    return (
      (thisTime > 60 ? Math.floor(minutes) : "0") +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  updateTime() {
    const audio = document.getElementById("audio");
    const timeSlider = document.getElementById("time-slider")
    this.setState({ currentTime: audio.currentTime });
    timeSlider.value = this.state.currentTime
  }

  handleMetadata() {
    const audio = document.getElementById("audio");
    this.setState({ duration: audio.duration });
  }

  handlePlay() {
    this.state.playing ? this.stop() : this.play();
    this.setState({ playing: !this.state.playing });
    // console.log(this.state.playing)
  }

  play() {
    let audio = document.getElementById("audio");
    audio.play();
  }

  stop() {
    let audio = document.getElementById("audio");
    audio.pause();
  }

  loop() {
    let audio = document.getElementById("audio");
    audio.loop = !audio.loop;
    this.setState({ loop: !this.state.loop });
  }

  // time() {
  //   let audio = document.getElementById("time-place")
  //   // return audio.currentTime
  //   audio.innerHTML= this

  // }
  // componentDidUpdate() {

  //     let audio = document.getElementById("audio")
  //     audio.play()
  // }

  render() {
    // if(this.props.currentTrack === null) {
    //     return null
    // }

        // let { currentTrack } = this.props.currentTrack
        // console.log(currentTrack, artist)

    return (
      <div className="playbar-div">
        <div className="playbar-inner" >

        <div className="media-controls">
          <div>
            <i className="fas fa-fast-backward"></i>
          </div>
          <div className="play-pause" onClick={() => this.handlePlay()}>
            {this.state.playing ? (
              <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
                )}
          </div>
          <div>
            <i className="fas fa-fast-forward"></i>
          </div>
          <div
            className={this.state.loop ? "orange-loop" : "loop"}
            onClick={() => this.loop()}
            >
            {this.state.loop ? (
              <i className="fas fa-redo-alt"></i>
              ) : (
                <i className="fas fa-redo-alt"></i>
                )}
          </div>

        </div>

        <div className="time-bar" >

          <p> {this.formatTime(this.state.currentTime)}</p>
        <audio
        autoPlay
        onTimeUpdate={this.updateTime}
        onLoadedMetadata={this.handleMetadata}
        id="audio"
        // controls
        src="https://docs.google.com/uc?export=download&id=1EZ83lkITMMggPrUoZLZOB7N5kqbN95cB"
        // src={currentTrack.track_url}
        >
          {/* Your browser does not suppot rthe */}
        </audio>
        <input 
        onChange={this.onSliderChange}
        id="time-slider"
        className="time-slider" 
        type="range"
        min="0"
        // defaultValue="1.5"
        max={this.state.duration}
        />
          <p> {this.formatTime(this.state.duration)}</p>
          </div>


        <div className="play-bar-song-info">
          <img
            src={
              "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
            }
            />

          <div className="artist-song-links">
            <h1>{"artist here"}</h1>
            <h1>{"song here"}</h1>
            {/* <h1 >{currentTrack.artist || "artist here"}</h1>
                    <h1 >{currentTrack.title || "song here"}</h1> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;

import React from "react";
import { Link } from "react-router-dom";
// import song from '../../../app/assets/audio/Skeleton.mp3'
// const song = require('../../../app/assets/audio/Skeleton.mp3')
class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      duration: 0,
      currentTime: 0,
      volume: 0.5,
    };

    this.handleVolume = this.handleVolume.bind(this);
    this.stop = this.stop.bind(this);
    this.play = this.play.bind(this);
    this.loop = this.loop.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    // this.time = this.time.bind(this)
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleVolume(e) {
    const audio = document.getElementById("audio");
    audio.volume = e.target.value;
    this.setState({ volume: e.target.value });
  }

  handlePrev() {
    let playedArray = this.props.playbar.played;
    if (playedArray < 1) alert("first song in queue");
    this.props.fetchPrevTrack(playedArray[playedArray.length - 1]);
  }

  handleNext() {
    if (this.props.playbar.userQueue.length) {
      this.props.fetchQueueTrack(this.props.playbar.userQueue.shift());
    } else if (this.props.playbar.pageQueue.length < 1) {
      alert("last song in queue");
    } else {
      this.props.fetchNextTrack(this.props.playbar.pageQueue[0]);
    }
  }

  onSliderChange(e) {
    const audio = document.getElementById("audio");
    this.setState({ currentTime: e.target.value });
    audio.currentTime = e.target.value;
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
    const timeSlider = document.getElementById("time-slider");
    this.setState({ currentTime: audio.currentTime });
    timeSlider.value = this.state.currentTime;
  }

  handleMetadata() {
    const audio = document.getElementById("audio");
    this.setState({ duration: audio.duration });
  }

  handlePlay() {
    this.props.playbar.isPlaying ? this.stop() : this.play();
  }

  play() {
    let audio = document.getElementById("audio");
    audio.play();
    this.props.playSong(this.props.playbar.currentTrack);
  }

  stop() {
    let audio = document.getElementById("audio");
    audio.pause();
    this.props.pauseSong();
  }

  loop() {
    let audio = document.getElementById("audio");
    audio.loop = !audio.loop;
    this.setState({ loop: !this.state.loop });
  }

  render() {
    if (this.props.playbar.currentTrack === null) {
      return null;
    }

    let { currentTrack, pageQueue, played, userQueue } = this.props.playbar;

    // console.log("     ");
    // console.log("songs played " + played);
    // // console.log("current track " + currentTrack.id)
    // console.log(pageQueue);
    // console.log("user queue " + userQueue);

    return this.props.playbar.isPlaying || currentTrack ? (
      <div className="playbar-div">
        <div className="playbar-inner">
          <div className="media-controls">
            <div onClick={() => this.handlePrev()}>
              <i className="fas fa-fast-backward"></i>
            </div>
            <div className="play-pause" onClick={() => this.handlePlay()}>
              {this.props.playbar.isPlaying ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </div>
            <div onClick={() => this.handleNext()}>
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

          <div className="time-bar">
            <p> {this.formatTime(this.state.currentTime)}</p>
            <audio
              autoPlay
              onTimeUpdate={this.updateTime}
              onLoadedMetadata={this.handleMetadata}
              onEnded={this.handleNext}
              id="audio"
              // controls
              // src="https://docs.google.com/uc?export=download&id=1EZ83lkITMMggPrUoZLZOB7N5kqbN95cB"
              src={currentTrack.track_url}
            ></audio>
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

          <div className="volume-control">
            <i className="fas fa-volume-up"></i>
            <span className="tooltiptext">
              <input
                onChange={this.handleVolume}
                id="volume-slider"
                className="volume-slider"
                type="range"
                min="0"
                step=".02"
                max="1"
              />
            </span>
          </div>
          <div className="play-bar-song-info">
            <img
              src={
                currentTrack.image_url ||
                "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
              }
            />

            <div className="artist-song-links">
              {/* <h1>{"artist here"}</h1>
            <h1>{"song here"}</h1> */}
              <Link to={`/users/${currentTrack.owner_id}`}>
                <h1>{currentTrack.artist || "artist here"}</h1>
              </Link>
              <Link to={`/tracks/${currentTrack.id}`}>
                <h1>{currentTrack.title || "song here"}</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default PlayBar;

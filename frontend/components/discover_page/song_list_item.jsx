import React from "react";
import { connect } from "react-redux";

import { playSong } from "../../actions/playbar_actions";

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    // this.props.queueSong(this.props.track.id)

  }

  handlePlay() {
    this.props.playSong(this.props.track);
  }

  handleLike(e) {
    e.stopPropagation();
    // .then(() => this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> }))
    if (this.props.liked) {
      // alert('delete like')
      this.props.deleteLike(this.props.track.id);

      //  this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> })
    } else {
      // alert('add like')
      this.props.createLike(this.props.track.id);
      //  this.setState({ button: <button onClick={() => this.likeTrack()} > {'<3'} {this.props.track.like_count} </button> })
    }
  }

  render() {
    return (
      <div className="song-list-item" onClick={() => this.handlePlay()}>
          <div>
              
        <h1>
          <span>{this.props.track.artist}</span>{" "}
          {" - " + this.props.track.title}
        </h1>
        </div>
        <div className="song-list-item-btn">

        <button
          className={this.props.liked ? "song-list-liked" : "song-list-unliked"}
          onClick={this.handleLike}
          >
          <i className="fas fa-heart"></i>
        </button>
            </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    // tracks: state.entities.tracks
  };
};

const mDTP = (dispatch) => {
  return {
    playSong: (track) => dispatch(playSong(track)),
  };
};

export default connect(mSTP, mDTP)(SongListItem);

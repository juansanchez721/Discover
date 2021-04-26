import React from "react";
import { Link } from "react-router-dom";
import PlayButton from "../play_button/play_button";
import Time from "../time/time";

class ProfileTrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackOptions: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLike = this.handleLike.bind(this);

    this.props.queuePageSong(this.props.track.id)
    // this.isLiked = this.isLiked.bind(this)
    // this.handlePlay = this.handlePlay.bind(this)
  }

  handleLike() {
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

  handleClick(e) {
    this.props.openModal("deleteTrack");
  }

  render() {
    const {
      track,
      user,
      currentUser,
      deleteTrackModal,
      updateTrackModal,
      liked,
      queueSong,
      currentTrack
    } = this.props;
    let userbuttons = null;
    if (user.id === currentUser.id) {
      const trackOp = this.state.trackOptions ? (
        <div className="track-options">
          <div>
            <span 
            className="drop-down-option more-button"
            onMouseDown={(e) => e.preventDefault()} 
            onClick={() => deleteTrackModal('deleteTrack', track)}> <i className="fas fa-trash"></i> Delete track </span>
          </div>

        </div>
      ) : null;
      userbuttons = (
        <div className="profile-track-buttons">
          <button
            className="track-buttons"
            onClick={() => updateTrackModal("updateTrack", track)}
          >
            <i className="fas fa-pencil-alt"></i> Edit{" "}
          </button>
          <button 
              className={ this.state.trackOptions ? "orange-track-btn" : "track-buttons"}
              onClick={() => this.setState({ trackOptions: !this.state.trackOptions })}
              onBlur={() => this.setState({ trackOptions: false })} 
               >

            <i className="fas fa-ellipsis-h"></i> More
          </button>
          {trackOp}
        </div>
      );
    } else {
      userbuttons = (
        <div className="profile-track-buttons">
          <button
            className={liked ? "liked-button" : "track-buttons"}
            onClick={this.handleLike}
          >
            <i className="fas fa-heart"></i>{" "}
            {track.likers.length}
          </button>
          <button
            className={"track-buttons"}
            onClick={() => queueSong(track.id)}
          >queue song
          </button>
        </div>
      );
    }

    return (
      <div className="profile-track-item">
        <img src={track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/>
        {/* <img
          src={
            "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
          }
        /> */}

        <div className="track-info">
          <div className="track-info-text">
            <div className="track-info-circle">
              <PlayButton track={track} currentTrackBool={currentTrack ? currentTrack.id === track.id : false } />
            </div>
            <div className="texttext">
              <div className="name-title">
                <div className="username-date-posted">
                  <h2 className="small-light-words"> {track.artist} </h2>
                  <Time time={track.created_at} />
                </div>
                <h1> {track.title} </h1>
              </div>
            </div>
          </div>
       
          {userbuttons}
        </div>
      </div>
    );
  }
}

export default ProfileTrackItem;

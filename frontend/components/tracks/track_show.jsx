import React from "react";
import PlayButton from "../play_button/play_button";
import CommentsContainer from "../comments/comments_container";
import {Link} from 'react-router-dom'
import Time from "../time/time";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    }
  }
  componentDidMount() {
    this.props
      .fetchTrack(this.props.match.params.trackId)
      .then(() =>
        this.props.fetchTrackComments(this.props.match.params.trackId)
      )
      .then(() => this.props.fetchUser(this.props.song.owner_id))
      .then(() => this.setState({ loaded: false }));

  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    if (prevProps.songId !== this.props.songId) {
      this.props
        .fetchTrack(this.props.songId)
        .then(() => this.props.fetchUser(this.props.song.owner_id))
        .then(() => this.props.fetchTrackComments(this.props.song.id));
    }
  }

  render() {
    // console.log(this.props.song)
    // console.log(this.props.user)

    if (this.state.loaded) {
      return (
        <div className="loading-page">
          <i className="fas fa-spinner loader"></i>
        </div>
      );
    }

    // if (
    //   this.props.song === undefined ||
    //   this.props.user === undefined
    // ) {
    //   return null;
    // }

    const { song, user, songId, currentPlayingTrack } = this.props
    return (
      <div className="show-full-page">
        <div className="track-show">
          <div className="info-playbar">
            <div className="info-text">
              <div className="track-show-circle-container">
                <PlayButton track={song} currentTrackBool={currentPlayingTrack ? currentPlayingTrack.id === song.id : false } />
              </div>
              <div className="song-info">
                <div className="song-info-time">
                  <h1 className="track-title">
                    <Link to={`/users/${user.id}`} >
                    {user.username}
                    </Link>
                  </h1>
                  <Time time={song.created_at} />
                </div>
                <h1 className="track-title"> {song.title} </h1>
              </div>
            </div>
          </div>
          <div className="show-image">
            <img
              src={ song.image_url ||
                "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
              }
            />

            {/* <img src={this.props.song.image_url} />  */}
          </div>
        </div>
        <CommentsContainer
          trackId={songId}
          artist={user}
          likeCount={song.likers.length}
          liked={song.likers.includes(this.props.currentUser.id)}
        />
      </div>
    );
  }
}

export default TrackShow;

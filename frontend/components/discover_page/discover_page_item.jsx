import React from "react";
import { Link } from "react-router-dom";
import PlayButton from "../play_button/play_button";

class DiscoverPageItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    // this.props.queueSong(this.props.track.id)
  }

  handleLike() {
    
    if (this.props.liked) {
      this.props.deleteLike(this.props.track.id);
    
    } else {
      this.props.createLike(this.props.track.id);
    }
  }

  render() {
    const { track, liked, currentTrack } = this.props;
    return (
      <div className="discover-page-item">
        <div className="discover-image-container">
          <img
            src={
              track.image_url ||
              "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
            }
          />
          <Link to={`/tracks/${track.id}`}>
            <div className="album-shadow"></div>
          </Link>

          <div className="album-shadow-circle">
            <PlayButton
              track={track}
              currentTrackBool={
                currentTrack ? currentTrack.id === track.id : false
              }
            />
          </div>

          <div className="index-options">
            <span className={liked ? "liked-heart" : ""}>
              <i onClick={this.handleLike} className="fas fa-heart"></i>
            </span>
          </div>
        </div>
        {/* <img
                src={
                  "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
                }
              /> */}

        <div className="song-info">
          <div className="yoyo">
            <h1 className="song-truncate">{track.title}</h1>
          </div>
          <h1 className="small-light-words">{track.artist || "artist here"}</h1>
        </div>
      </div>
    );
  }
}

export default DiscoverPageItem;

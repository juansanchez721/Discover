import React from "react";
import DiscoverPageItem from "../discover_page/discover_page_item";
import { NavLink, Switch } from "react-router-dom";

class LikesPage extends React.Component {
  // const LikesPage = (props) => {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
    // this.props.clearPageQueue()
  }


  componentDidMount() {
    this.props
      .fetchTrackLikes(this.props.userId)
      .then(() => this.setState({ loaded: false }));
  }

  render() {
    const { likedTracks, currentUser } = this.props;
    if (this.state.loaded) return null;
    if (likedTracks.length ===0 ){
      return <div className="empty-message">
        <span>

        <i className="fas fa-heart"></i>
        </span>
        <p>
          You have no likes yet
        </p>
      </div>
    }

    let likeTracks = null;
    if(parseInt(this.props.userId) === this.props.currentUser.id){

      likeTracks = likedTracks.sort((a,b) => new Date(b.like_created_at) - new Date(a.like_created_at)).map((track) => (
        <DiscoverPageItem
        key={track.id}
        track={track}
        liked={track.likers.includes(currentUser.id)}
        createLike={this.props.createLike}
        deleteLike={ this.props.deleteAndRemoveLike }
        currentTrack = {this.props.currentPlayingTrack || null}
        profileBool={"Profile"}
        // queueSong={this.props.queuePageSong}

        />
        ));
      } else {
        likeTracks = likedTracks.map((track) => (
          <DiscoverPageItem
          key={track.id}
          track={track}
          liked={track.likers.includes(currentUser.id)}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          currentTrack = {this.props.currentPlayingTrack || null}
          // queueSong={this.props.queuePageSong}
          profileBool={"Profile"}
          />
        ))
      }

    return (
      <div className="likes-container">
        <div className="likes-inner">{ parseInt(this.props.userId) === this.props.currentUser.id ? likeTracks : likeTracks.reverse()}</div>
      </div>
    );
  }
}

export default LikesPage;

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
  }

  // console.log(props.tracks)

  componentDidMount() {
    this.props
      .fetchTrackLikes(this.props.match.params.userId)
      .then(() => this.setState({ loaded: false }));
  }

  render() {
    const { likedTracks } = this.props;
    if (this.state.loaded) return null;

    let likeTracks = Object.values(likedTracks).map((track) => (
      <DiscoverPageItem
        key={track.id}
        track={track}
        liked={track.likers.includes(this.props.currentUser.id)}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
      />
    ));

    return (
      <div className="likes-container">
        <div className="profile-comments-top">
            <div className="profile-navlinks" >

          <NavLink
            exact
            to={`/users/${this.props.match.params.userId}/comments`}
            activeStyle={{
                fontWeight: "bold",
                color: "#FE5000",
            }}>
            Comments
          </NavLink>
          <NavLink
            exact
            to={`/users/${this.props.match.params.userId}/likes`}
            activeStyle={{
                fontWeight: "bold",
                color: "#FE5000",
            }}>
            likes
          </NavLink>
            </div>
        </div>
        <div className="likes-inner">{likeTracks}</div>
      </div>
    );
  }
}

export default LikesPage;

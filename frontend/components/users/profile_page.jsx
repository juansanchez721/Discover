import React from "react";
import { Link } from "react-router-dom";
import LikesItem from './likes_item'
import ProfileTrackItem from "./profile_track_item";
import ProfileCommentItem from './profile_comments_item'
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    // debugger;

    this.state = {
      loaded: true,
    };
    // this.yoo = null;
    // this.userId = this.props.match.params.userId
  }

  componentDidMount() {
    // this.setState({ userId: this.props.match.params.userId})

    this.props
      .fetchUser(this.props.match.params.userId)
      .then(() =>
        this.props.fetchSingleUserTracks(this.props.match.params.userId)
      )
      .then(()=> this.props.fetchTrackLikes(this.props.match.params.userId) )
      .then(()=> this.props.fetchUserComments(this.props.match.params.userId) )
      .then(() => this.props.fetchUserFollows(this.props.match.params.userId) )
      .then(() => this.setState({ loaded: false }));
  }

  componentDidUpdate(prevProps) {
    // debugger;
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props
        .fetchSingleUserTracks(this.props.match.params.userId)
        .then(this.props.fetchUser(this.props.match.params.userId))
        .then(()=> this.props.fetchTrackLikes(this.props.match.params.userId) )
        .then(()=> this.props.fetchUserComments(this.props.match.params.userId) )
        .then(() => this.props.fetchUserFollows(this.props.match.params.userId) )

    }
    // debugger;
  }

  render() {
    // debugger;

    if (this.state.loaded) {
      return (
        <div className="profile-page">
          <h1>Loading . . .</h1>
        </div>
      );
    }


    if (this.props.user === undefined) {
      return null;
    }

    // console.log(this.props.tracks);
    // debugger;
    let tracks = this.props.tracks.map((track) => (
      <ProfileTrackItem
        key={track.id}
        user={this.props.user}
        track={track}
        liked={track.likers.includes(this.props.currentUser.id)}
        currentUser={this.props.currentUser}
        playSong={this.props.playSong}
        updateTrackModal={this.props.updateTrackModal}
        deleteTrackModal={this.props.deleteTrackModal}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
        queueSong={this.props.queueSong}
      />
    ));

    let likeitems = this.props.likes.map(like => {
        return <LikesItem key={like.id} track={like} />
    })

    let commentItems = this.props.comments.map(comment => {
        return <ProfileCommentItem key={comment.id}  comment={comment} />
    })

    let emptyMessage = <div className="empty-message" >
        <h1>Nothing to show yet.</h1>
    </div>

let followButton = ( this.props.currentUser.follows.includes(this.props.user.id) ?
  <button 
  className="following-button" 
  onClick={
      ()=>this.props.unfollow(this.props.user.id)}
  >
      <i className="fas fa-user-check"></i> Following
      </button>
  :
      <button 
      className="follow-button" 
      onClick={
          () => this.props.follow(this.props.user.id) }
      >
          <i className="fas fa-user-plus"></i> Follow
      </button>


  )

  let editButton = (
    <button 
    className="follow-button" 
    onClick={()=>this.props.editUserModal("editProfile", this.props.user)} >
      
      <i className="fas fa-pencil-alt"></i> Edit
      </button>
  )

    return (
      <div className="profile-page">
        <div className="info-holder">
          <div className="image-container">
            <div className="circle-holder">
              {/* <img
                className="profile-default"
                src="https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"
              /> */}
              <img className="profile-default" src={this.props.user.image_url ? this.props.user.image_url : "https://gp1.wac.edgecastcdn.net/802892/production_static/20201210093131/images/widgets/html5_audio/55/default_image.png"}/>
            </div>
          </div>
          <div className="user-info">
            <div className="text">
              <h1>{this.props.user.username}</h1>
            </div>
          </div>
          {/* <h1>This is the user page</h1> */}
        </div>
          <div className="profile-options" >
            { this.props.user.id === this.props.currentUser.id ? editButton : followButton}
          </div>
        <div className="profile-page-bottom">
          <div className="recent-tracks">
            {/* <div className="actual-tracks"> */}

            <h3>Recent</h3>
            {tracks.reverse()}
            {/* </div> */}
            {/* <ProfileTracksContainer /> */}
          </div>
          <div className="text-right-side">
            <div className="text-right-inner">

            <div className="user-profile-info" >

              <span>
                <Link className="link-hover"  to={`/users/${this.props.user.id}/followers`} >
                  <h2>Followers</h2>
                  <h1>{this.props.user.followers_count}</h1>
                </Link>

              </span>

              <span>
              <Link className="link-hover" to={`/users/${this.props.user.id}/following`} >

                  <h2>Following</h2>
                  <h1>{this.props.user.follows.length}</h1>

              </Link>
              </span>
              <span>
                  <h2>Tracks</h2>
                  <h1>{tracks.length}</h1>

              </span>

            </div>
              <div className="user-bio" >
                {this.props.user.bio}
              </div>
            <Link
          className="text-link"
            to={`/users/${this.props.user.id}/likes`}
            >

            <div  className="links-header" >

              <h1>
                <i className="fas fa-heart"></i>
                {" " + this.props.user.track_likes.length + " likes" || null}
              </h1>
              <p>View all</p>
            </div>
            </Link>

                <div className="profile-likes" >
                {this.props.user.track_likes.length ? likeitems.reverse() : emptyMessage}
                </div>

                <Link
          className="text-link"
            to={`/users/${this.props.user.id}/comments`}
            >

            <div  className="links-header" >

              <h1>
              <i className="fas fa-comment-alt"></i>
                {" " + this.props.user.comment_count + " comments"}
              </h1>
              <p>View all</p>
            </div>
            </Link>
            <div className="profile-likes" >
              {this.props.user.comment_count ? commentItems.reverse() : emptyMessage}
                </div>
                <div className="footer">
          <span>
              <a href="https://github.com/juansanchez721" target="_blank">
                Github
              </a>
            ⁃
              <a href="https://www.linkedin.com/in/juan-sanchez-24a68b113/" target="_blank">
                LinkedIn
              </a>
            ⁃
              <a href="https://angel.co/u/juan-sanchez-41" target="_blank">
                AngelList
              </a>
          </span>

            <a href="" target="_blank" className="last-footer-link" >
              Portfolio
            </a>
        </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

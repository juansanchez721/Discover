import React from "react";
import { Link } from "react-router-dom";
import LikesItem from "../users/likes_item";
import DiscoverPageItem from "./discover_page_item";
import UserItem from "./user_item";
import SongList from "./song_list";
class DiscoverPage extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    // this.tracks = null;
    this.state = {
      loaded: true
    }
  }

  componentDidMount() {
    this.props
      .fetchUsers()
      .then(this.props.fetchTracks())
      .then(this.props.fetchTrackLikes(this.props.currentUser.id))
      .then(() => this.setState({loaded: false}) )
    // debugger;
  }

  render() {

    
    if (this.state.loaded) {
      return (
        <div className="loading-page">
          <i className="fas fa-spinner loader"></i>
        </div>
      );
    }

    // debugger;
    let songListSongs = [];
    let trackssecond = this.props.tracks.map((track, i) => {
      if(i >= 8){

       return <DiscoverPageItem
        owner={this.props.users[track.owner_id]}
        key={track.id}
        liked={track.likers.includes(this.props.currentUser.id)}
        track={track}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
        currentTrack = {this.props.currentPlayingTrack || null}

        />
      }
    })
    
    let tracksfirst = this.props.tracks.map((track, i) => {
      if(i < 8){

       return <DiscoverPageItem
        owner={this.props.users[track.owner_id]}
        key={track.id}
        liked={track.likers.includes(this.props.currentUser.id)}
        track={track}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
        currentTrack = {this.props.currentPlayingTrack || null}

        />
      } else {
        songListSongs.push(track)
      }

    }
    )
        
       
    // this.props.tracks.sort(() => Math.random() - 0.5)

    // let trackssecond = this.props.tracks.map(track => (
    //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/>
    // ))

    // this.props.tracks.sort(() => Math.random() - 0.5)

    // let tracksthird = this.props.tracks.map(track => (
    //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/>
    // ))

    // this.props.tracks.sort(() => Math.random() - 0.5)

    // let tracksfourth = this.props.tracks.map(track => (
    //     <DiscoverPageItem owner={this.props.users[track.owner_id]} key={track.id} track={track}/>
    // ))

    let likeitems = this.props.likes.length > 0 ?this.props.likes
      .sort((a, b) => new Date(b.like_created_at) - new Date(a.like_created_at))
      .map((like) => {
        return <LikesItem key={like.id} track={like} />;
      })
      :
      <div className="empty-message">
                you don't have any likes yet.
              </div>

    

    // console.log(Object.values(this.props.users))
    let userLinks = Object.values(this.props.users).map((user, i) => {
      if (i < 3) return <UserItem key={user.id} 
      user={user} 
      followingBool={this.props.currentUser.follows.includes(user.id)} 
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />;
    });

    // debugger;
    return (
      <div className="discoverpage">
        {/* <h1>Discover here</h1>
            <h1>Here:</h1> */}
        <div className="discover-page-holder">
          <div className="rows-of-music">
            <div className="inner-rom">
              <div className="discover-titles">
                <h2 className="discover-page-headers">More of what you like</h2>
                <p className="small-light-words">
                  {" "}
                  Suggestions based on what you've liked or played
                </p>
              </div>
              <div className="showing-songs">
                <div className="inner-showing">{trackssecond.reverse()}</div>

              </div>
              {/* <hr> */}
              <br />
              <br />

              <div className="discover-titles">
                <h2 className="discover-page-headers">The Upload</h2>
                <p className="small-light-words">
                  {" "}
                  Listen to what's next in music{" "}
                </p>
              </div>
              <div className="showing-songs">
                {/* <div className="inner-showing"> */}
                <SongList
                  createLike={this.props.createLike}
                  deleteLike={this.props.deleteLike}
                  currentUser={this.props.currentUser}
                  currentTrack = {this.props.currentPlayingTrack || null}
                  tracks={songListSongs}
                />
                {/* </div> */}
              </div>
              <br />
              <br />

              <div className="discover-titles">
                <h2 className="discover-page-headers">Recommended</h2>
                <p className="small-light-words">
                  {" "}
                  Discover more{" "}
                </p>
              </div>
              <div className="showing-songs">
              <div className="inner-showing">{tracksfirst}</div>
              </div>
              <br />
              <br />

              {/* <div className="discover-titles">
                <h2 className="discover-page-headers">Try something newr</h2>
                <p className="small-light-words">
                  {" "}
                  Some holder words that go here{" "}
                </p>
              </div>
              <div className="showing-songs"> */}
                {/* <div className="inner-showing">{tracksfourth}</div> */}
              {/* </div> */}
            </div>
          </div>

          <div className="right-side-bar">
            <div className="user-links">
              <div className="right-bar-tile">
                <span className="links-header">
                  <h1>
                    {" "}
                    <i className="fas fa-user-friends"></i> Who to follow
                  </h1>
                </span>
                {userLinks}
              </div>
              <div className="right-bar-tile">
                <Link
                  className="text-link"
                  to={`/users/${this.props.currentUser.id}/likes`}
                >
                  <div className="links-header">
                    <h1>
                      <i className="fas fa-heart"></i>
                      {}
                      {likeitems.length ? " " + likeitems.length + " likes" : " 0 likes"}
                    </h1>
                    <p>View all</p>
                  </div>
                </Link>

                <div className="profile-likes">
                  {likeitems}
                  {/* {this.props.user.track_likes.length ? likeitems.reverse() : emptyMessage} */}
                </div>
              </div>

              <div className="footer">
                <span>
                  <a href="https://github.com/juansanchez721" target="_blank">
                    Github
                  </a>
                  ⁃
                  <a
                    href="https://www.linkedin.com/in/juan-sanchez-24a68b113/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  ⁃
                  <a href="https://angel.co/u/juan-sanchez-41" target="_blank">
                    AngelList
                  </a>
                </span>

                <a href="" target="_blank" className="last-footer-link">
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

export default DiscoverPage;

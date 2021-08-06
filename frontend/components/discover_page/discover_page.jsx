import React from "react";
import { Link } from "react-router-dom";
import LikesItem from "../users/likes_item";
import DiscoverPageItem from "./discover_page_item";
import UserItem from "./user_item";
import SongList from "./song_list";
class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    }
    // this.props.clearPageQueue()
    // this.handleCarousel = this.handleCarousel.bind(this)

  }

  // handleCarousel() {
  //   // alert("moving")
  //   let arrow= document.getElementById("showing-songs-1")
  //   console.log(arrow.children[1])
  //   console.log(arrow.children[1].children.length)

  //   let oldT
  //   console.log(arrow.children[1].style.transform)
  //   arrow.children[1].style.transform = `translateX(-${60}%)`
  // }

  componentDidMount() {
    // this.props.fetchCurrentUser(this.props.currentUser.id)
    this.props.fetchTracks()
    this.props.fetchUsers()
      .then(() => this.setState({loaded: false}) )
  }

  render() {

    
    if (this.state.loaded) {
      return (
        <div className="loading-page">
          <i className="fas fa-spinner loader"></i>
        </div>
      );
    }

    let songListSongs = [];
    let trackssecond = this.props.tracks.map((track, i) => {
      if(i >= 16){

       return <DiscoverPageItem

        owner={this.props.users[track.owner_id]}
        key={track.id}
        liked={this.props.currentUser.track_likes.includes(track.id)}
        track={track}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
        currentTrack = {this.props.currentPlayingTrack || null}
        // queueSong={this.props.queuePageSong}
        />
      }
    })
    
    let tracksfirst = this.props.tracks.map((track, i) => {
      if(i < 9){

       return <DiscoverPageItem
        owner={this.props.users[track.owner_id]}
        key={track.id}
        liked={this.props.currentUser.track_likes.includes(track.id)}
        track={track}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike}
        currentTrack = {this.props.currentPlayingTrack || null}
        // queueSong={this.props.queuePageSong}

        />
      } else if( i < 16) {
        songListSongs.push(track)
      }

    }
    )
        
    let likeitems = this.props.likes.length > 0 ? this.props.likes
      .map((like) => {
        return <LikesItem key={like.id} track={like} />;
      })
      :
      <div className="empty-message">
                you don't have any likes yet.
              </div>

    

    let userLinks = Object.values(this.props.users).map((user, i) => {
      if (i < 3) return <UserItem key={user.id} 
      user={user} 
      followingBool={this.props.currentUser.follows.includes(user.id)} 
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />;
    });

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
              <div className="showing-songs" id="showing-songs-1" >
               {/* <div className="carousel-arrows" >

                <span onClick={this.handleCarousel} >
                <i className="fas fa-chevron-left"></i>
                </span>
                <span onClick={this.handleCarousel} >
                <i className="fas fa-chevron-right"></i>
                </span>
               </div> */}
               
                <div className="inner-showing">
                  {tracksfirst}
                  
                  </div>
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
                  // queueSong={this.props.queuePageSong}
                  currentTrack = {this.props.currentPlayingTrack || null}

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
              <div className="inner-showing">{trackssecond}</div>
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
                      {this.props.currentUser.track_likes.length ? " " + this.props.currentUser.track_likes.length + " likes" : " 0 likes"}
                    </h1>
                    <p>View all</p>
                  </div>
                </Link>

                <div className="profile-likes">
                  {/* {likeitems} */}
                  {this.props.likes.length ? likeitems.reverse() : likeitems}
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

                <a href="https://juansanchez721.github.io/" target="_blank" className="last-footer-link">
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

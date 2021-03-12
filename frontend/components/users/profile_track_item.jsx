import React from 'react'
import {Link} from 'react-router-dom'
import PlayButton from '../play_button/play_button'
import Time from '../time/time'


class ProfileTrackItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleLike = this.handleLike.bind(this)
        // this.isLiked = this.isLiked.bind(this)
        // this.handlePlay = this.handlePlay.bind(this)
    }

    handleLike(){
      // .then(() => this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> }))
      if (this.props.liked){
        // alert('delete like')
        this.props.deleteLike(this.props.track.id)

        //  this.setState({ button: <button onClick={() => alert('liked already')} > LIKED</button> })
      } else {
        // alert('add like')
        this.props.createLike(this.props.track.id)
        //  this.setState({ button: <button onClick={() => this.likeTrack()} > {'<3'} {this.props.track.like_count} </button> })
      }

    }

    

    handleClick(e) {
        this.props.openModal('deleteTrack')
    }


    render() {
    
    const { track, user, currentUser, deleteTrackModal, updateTrackModal, liked } = this.props;
    //     debugger
        let userbuttons = null
        if(user.id === currentUser.id ) {
            debugger
            userbuttons = 
            <div className="profile-track-buttons" >
                    <button className="track-buttons" onClick={() => updateTrackModal('updateTrack', track)} ><i className="fas fa-pencil-alt"></i> Edit </button>
                    <button className="track-buttons" onClick={() => deleteTrackModal('deleteTrack', track)} >Delete song</button>
                    
                </div>
        } else {
          userbuttons = 
            <div className="profile-track-buttons" >
            <button className= {liked ? "liked-button" : "track-buttons"} 
            onClick={this.handleLike}> 
            <i className="fas fa-heart"></i> {liked ? track.likers.length : "Like"}
            </button>
                
                </div>
        }

        return (
          <div className="profile-track-item">
            {/* <img src={track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
            <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/>

            <div className="track-info">
              <div className="track-info-text">
                <div className="track-info-circle">
                    <PlayButton track={track}/>
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
              {/* <audio
                className="profile-audio"
                controls */}
              {/* src={track.track_url} */}
              {/* > */}
              {/* Your browser does not support the */}
              {/* <code>audio</code> element. */}
              {/* </audio> */}
                {userbuttons}
            </div>
          </div>
        );
    }     

} 

export default ProfileTrackItem
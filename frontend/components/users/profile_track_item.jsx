import React from 'react'
import {Link} from 'react-router-dom'
class ProfileTrackItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
    }

    handlePlay() {
      debugger
      this.props.playSong(this.props.track)
    }


    handleClick(e) {
        this.props.openModal('deleteTrack')
    }

    handleTime() {
        let _initial = this.props.track.created_at;
        let fromTime = new Date(_initial);
        let toTime = new Date();

        let differenceTravel = toTime.getTime() - fromTime.getTime();
        let seconds = Math.floor(differenceTravel / 1000);
        // return ((seconds/60)/60)/24
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        if (days <= 31){
            return Math.floor(days) + " days ago"
        } else {
            return days/12 + " manths ago"
        }

    }


    render() {

    
    const { track, user, deleteTrack, currentUser, deleteTrackModal, updateTrackModal } = this.props;
    //     debugger
        let userbuttons = null
        if(user.id === currentUser.id ) {
            debugger
            userbuttons = 
            <div className="profile-track-buttons" >
                    <button onClick={() => updateTrackModal('updateTrack', track)} > Edit </button>
                    <button onClick={() => deleteTrackModal('deleteTrack', track)} >Delete song</button>
                    
                </div>
        }

        return (
          <div className="profile-track-item">
            {/* <img src={track.image_url}/> */}
            <img
              src={
                "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"
              }
            />

            <div className="track-info">
              <div className="track-info-text">
                <div className="orange-circle-container">
                  <div className="orange-circle" onClick={() => this.handlePlay()} ></div>
                </div>
                <div className="texttext">
                  <div className="name-title">
                    <h2 className="small-light-words"> {user.username} </h2>
                    <h1> {track.title} </h1>
                  </div>
                  <p className="small-light-words">{this.handleTime()}</p>
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
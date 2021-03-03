import React from 'react'
import {Link} from 'react-router-dom'
import PlayButton from '../play_button/play_button'
import Time from '../time/time'


class ProfileTrackItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        // this.handlePlay = this.handlePlay.bind(this)
    }

    

    handleClick(e) {
        this.props.openModal('deleteTrack')
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
            {/* <img src={track.image_url || "https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/> */}
            <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"}/>

            <div className="track-info">
              <div className="track-info-text">
                <div className="track-info-circle">
                    <PlayButton track={track} user={user}/>
                </div>
                <div className="texttext">
                  <div className="name-title">
                    <h2 className="small-light-words"> {user.username} </h2>
                    <h1> {track.title} </h1>
                  </div>
                  <Time time={track.created_at} />
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
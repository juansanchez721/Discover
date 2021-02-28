import React from 'react'
import {Link} from 'react-router-dom'
class ProfileTrackItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
            this.state = {
                showModal: false
            }
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
            <div>
                    <button onClick={() => deleteTrackModal('deleteTrack', track)} >Delete song</button>
                    <button onClick={() => updateTrackModal('updateTrack', track)} >Update song</button>
            
                </div>
        }

        return (
            <div className = "profile-track-item">
            {/* <img src={track.image_url}/> */}
            <img src={"https://cdn.spindizzyrecords.com/uploads/2017/07/default-release-cd.png"} />

            <div className="track-info">

                <h1> {track.title} </h1>    
                <h2> {user.username} </h2>   
                <audio className="profile-audio"
                    controls
                    // src={track.track_url}
                    >
                        Your browser does not support the
                            {/* <code>audio</code> element. */}
                </audio>
            </div>
            {userbuttons}
        </div>
    )
    }     

} 

export default ProfileTrackItem
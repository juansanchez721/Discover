import React from 'react'
import {Link} from 'react-router-dom'
class ProfileTrackItem extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        this.props.openModal('deleteTrack')
    }


    render() {

    
    const { track, user, deleteTrack, currentUser, openModal } = this.props;
    //     debugger
        let userbuttons = null
        if(user.id === currentUser.id ) {
            debugger
            userbuttons = 
            <div>
                    {/* <button onClick={() => deleteTrack(track.id)} >Delete song</button> */}
                    <Link to={`/tracks/${track.id}/edit`} >
                    <h1>Edit</h1>
                    </Link>
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
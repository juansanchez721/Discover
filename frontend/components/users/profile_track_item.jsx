import React from 'react'


const ProfileTrackItem = ( { track, user }) => {


    return (
        <div className = "profile-track-item">
            <img src={track.image_url}/>

            <div className="track-info">

                <h1> {track.title} </h1>    
                <h2> {user.username} </h2>   
                <audio className="profile-audio"
                    controls
                    src={track.track_url}>
                        Your browser does not support the
                            {/* <code>audio</code> element. */}
                </audio>
            </div>
        </div>
    )
}

export default ProfileTrackItem
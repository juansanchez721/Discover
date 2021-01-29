import React from 'react'


const ProfileTrackItem = ( { track }) => {


    return (
        <div className = "profile-track-item">
            <h1> {track.title} </h1>       
        </div>
    )
}

export default ProfileTrackItem
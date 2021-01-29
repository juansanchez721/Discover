

import React from 'react'
import ProfileTracksContainer from './profile_tracks_container'
import ProfileTrackItem from './profile_track_item'
class ProfilePage extends React.Component {

    constructor(props){
        super(props)
        debugger
        this.userId = this.props.match.params.userId
    }

    componentDidMount() {
        this.props.fetchSingleUserTracks(this.userId)
        this.props.fetchUser(this.userId);
        debugger
    }

    render() {
        debugger

        if(this.props.user === undefined){
            return null
        }


        let tracks = Object.values(this.props.tracks).map(track => (
            <ProfileTrackItem key={track.id} user={this.props.user} track={track}/>
        ))

        return(

            <div className="profile-page">
                <div className ="info-holder">
                    <div className="image-container">
                        
                        <div className="circle-holder">
                        <img className="profile-default" src={this.props.user.image_url}/>
                        </div>
                    
                    </div>
                        <div className="user-info">
                            <div className="text">
                            <h1>{this.props.user.username}</h1>

                            </div>
                        </div>
                        {/* <h1>This is the user page</h1> */}

                        <div>
                        </div>
                
                </div>

                            {tracks}
                {/* <ProfileTracksContainer /> */}

            </div>
        )
    }


}


export default ProfilePage
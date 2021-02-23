import React from 'react'

class ProfileTrackItem extends React.Component {

     constructor(props){
         super(props)

     } 

    componentDidMount(){
        this.props.fetchTracks(this.props.user.id)
        .then(console.log(tracks))
    }
    // console.log( user.username, track.title)

    // tracks.forEach(track => {
        // console.log(tracks)
    // })
    
    render() {

        return null
            // <div className = "profile-track-item">
            //     <img src={track.image_url}/>
            
            //     <div className="track-info">
            
            //         <h1> {track.title} </h1>    
            //         <h2> {user.username} </h2>   
            //         <audio className="profile-audio"
            //             controls
            //             src={track.track_url}>
            //                 Your browser does not support the
            //                     {/* <code>audio</code> element. */}
            //         </audio>
            //     </div>
            // </div>
            
        }
        }
        
        export default ProfileTrackItem